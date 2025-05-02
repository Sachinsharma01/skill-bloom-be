import ordersInteractor from 'interactors/ordersInteractor';
import userInteractor from 'interactors/userInteractor';
import userCourseMappingInteractor from 'interactors/userCourseMapppingInteractor';
import { Orders } from 'interfaces/orders';
import constants from 'utils/constants';
import logger from 'utils/logger';
import { v4 as uuidv4 } from 'uuid';
import RazorpayService from './razorpay';

class OrdersService {
    #formatOrderPayload(payload: any) {
        return {
            amount: (payload.totalAmount * 100).toString(),
            currency: 'INR',
            receipt: payload.orderId,
            partial_payment: false,
            notes: {
                user_id: payload.userId,
                course_id: payload.courseId,
                user_name: payload.userName,
                mobile: payload.mobile,
                order_id: payload.orderId,
            },
        };
    }

    async getMyOrders(userId: number) {
        const orders: any[] = await ordersInteractor.getOrdersByUserId(userId);
        return orders;
    }

    async createOrder(userId: number, order: Orders) {
        const user = await userInteractor.findUserById(userId);
        const payment_id = uuidv4();
        const tempUUID = uuidv4();
        const orderPayload = {
            user_id: userId,
            course_id: order.course_id,
            status: constants.ORDER_STATUS.PENDING,
            amount: order.amount * 100,
            payment_id: payment_id,
            created_by: tempUUID,
        };
        logger.debug(`Order payload: ${JSON.stringify(orderPayload)}`);
        const orderCreated = await ordersInteractor.createOrder(orderPayload);
        logger.debug(`Order created: ${JSON.stringify(orderCreated)}`);

        const createdOrder: any = await ordersInteractor.getOrderByTempId(
            tempUUID,
        );

        const razorpayOrderPayload = this.#formatOrderPayload({
            userId: userId,
            courseId: order.course_id,
            userName: user?.name,
            mobile: user?.mobile_number,
            orderId: createdOrder.id.toString(),
            totalAmount: order.amount,
        });

        const razorpayOrder = await RazorpayService.createRazorpayOrder(
            razorpayOrderPayload,
        );
        logger.debug(`Razorpay order: ${JSON.stringify(razorpayOrder)}`);
        return { ...createdOrder, razorpay_order: razorpayOrder };
    }

    async updateOrder(orderId: number, paymentId: string, razorpayId: string) {
        const orderUpdatePayload = {
            razorpay_id: razorpayId,
            payment_id: paymentId,
            status: constants.ORDER_STATUS.SUCCESS,
        };
        const order: any = await ordersInteractor.updateOrder(
            orderId,
            orderUpdatePayload,
        );

        const userCourseMappingPayload = {
            user_id: order.user_id,
            course_id: order.course_id,
        };
        await userCourseMappingInteractor.createUserCourseMapping(
            userCourseMappingPayload,
        );
        return order;
    }
}

export default new OrdersService();

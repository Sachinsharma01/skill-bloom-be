import { NextFunction, Request, Response } from 'express';
import { IRequest } from 'interfaces/common';
import OrdersService from 'services/orders';
import SuccessResponse from 'utils/apiResponse';
class OrdersController {
    async getMyOrders(req: IRequest, res: Response, next: NextFunction) {
        try {
            const userId: number = parseInt(req.user?.id as string);
            const orders = await OrdersService.getMyOrders(userId);
            return SuccessResponse(res, orders, 'Orders fetched successfully');
        } catch (error) {
            next(error);
        }
    }
    async createOrder(req: IRequest, res: Response, next: NextFunction) {
        try {
            const userId: number = parseInt(req.body.user_id as string);
            const order = await OrdersService.createOrder(userId, req.body);
            return SuccessResponse(res, order, 'Order created successfully');
        } catch (error) {
            next(error);
        }
    }
    async updateOrder(req: IRequest, res: Response, next: NextFunction) {
        try {
            const orderId: number = parseInt(req.params.orderId as string);
            const paymentId: string = req.body.payment_id as string;
            const razorpayId: string = req.body.razorpay_id as string;
            const order = await OrdersService.updateOrder(orderId, paymentId, razorpayId);
            return SuccessResponse(res, order, 'Order updated successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new OrdersController();

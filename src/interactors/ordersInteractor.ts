import { DB } from 'database';

class OrdersInteractor {
    async getOrdersByUserId(userId: number) {
        return DB.Orders.findAll({
            where: { user_id: userId },
            include: [{ model: DB.Courses, as: 'course' }],
        });
    }

    async createOrder(order: any) {
        return DB.Orders.create(order);
    }

    async updateOrder(orderId: number, order: any) {
        return DB.Orders.update(order, { where: { id: orderId } });
    }
}

export default new OrdersInteractor();

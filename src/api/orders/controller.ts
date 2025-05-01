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
            const userId: number = parseInt(req.user?.id as string);
            const order = await OrdersService.createOrder(userId, req.body);
            return SuccessResponse(res, order, 'Order created successfully');
        } catch (error) {
            next(error);
        }
    }
}

export default new OrdersController();

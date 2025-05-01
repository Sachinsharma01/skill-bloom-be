import { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } from "config";
import Razorpay from "razorpay";
import logger from "utils/logger";

class RazorpayService {
    private client: Razorpay;
    
    constructor() {
        this.client = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_KEY_SECRET,
        });
    }

    async createRazorpayOrder(payload: any) {
        logger.debug(`Creating razorpay order: ${JSON.stringify(payload)}`);
        return this.client.orders.create(payload);
    }
}

export default new RazorpayService();
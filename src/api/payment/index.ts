import express from 'express';
import {
    StandardCheckoutClient,
    Env,
    StandardCheckoutPayRequest,
    MetaInfo,
} from 'pg-sdk-node';

import {
    PHONEPE_CLIENT_ID,
    PHONEPE_CLIENT_SECRET,
    PHONEPE_CLIENT_VERSION,
    PHONEPE_ENV,
} from '../../config';
import crypto from 'crypto';
import logger from 'utils/logger';

const router: express.Router = express.Router();

router.post('/initiate', async (req, res, next) => {
    try {
        const client = StandardCheckoutClient.getInstance(
            PHONEPE_CLIENT_ID as any,
            PHONEPE_CLIENT_SECRET as any,
            PHONEPE_CLIENT_VERSION as any,
            PHONEPE_ENV as any,
        );

        const merchantOrderId = crypto.randomUUID();
        const redirectURL = 'https://skillbloom.in/resources/';

        const metaInfo: MetaInfo = MetaInfo.builder()
            .udf1('udf1')
            .udf2('udf2')
            .build();

        const request: StandardCheckoutPayRequest =
            StandardCheckoutPayRequest.builder()
                .merchantOrderId(merchantOrderId)
                .redirectUrl(redirectURL)
                .amount(req.body.amount * 100)
                .metaInfo(metaInfo)
                .build();

        const response = await client.pay(request);

        res.json({ checkoutUrl: response.redirectUrl });
    } catch (error) {
        console.error('Payment init failed:', error);
        res.status(500).json({ error: 'Payment initiation failed' });
    }
});

router.get('/capture', async (req, res, next) => {
    try {
        logger.debug('Webhook called here');
    } catch (error) {
        console.error('Payment capture failed:', error);
    }
});

export default router;

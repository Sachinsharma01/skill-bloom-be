import express from 'express';
import PortfolioController from './controller';
import { validateRequest } from 'middlewares/validate-request';
import { createPortfolioSchema } from './validator';
import { authMiddleware } from 'middlewares/auth';
import { validateUser } from 'middlewares';
const router: express.Router = express.Router();

router.get('/:portfolioId', PortfolioController.getPortfolio);

router.post(
    '/',
    authMiddleware,
    validateRequest(createPortfolioSchema),
    PortfolioController.createPortfolio,
);

router.post(
    '/:userId',
    authMiddleware,
    validateUser,
    PortfolioController.grantPortfolioAccess,
);

router.post(
    '/:userId/order',
    authMiddleware,
    validateUser,
    PortfolioController.createPortfolioOrder,
);

export default router;

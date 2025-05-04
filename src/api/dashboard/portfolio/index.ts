import express from 'express';
import PortfolioController from './controller';
import { validateRequest } from 'middlewares/validate-request';
import { createPortfolioSchema } from './validator';
import { authMiddleware } from 'middlewares/auth';
const router: express.Router = express.Router();

router.get('/:portfolioId', authMiddleware, PortfolioController.getPortfolio);

router.post(
    '/',
    authMiddleware,
    validateRequest(createPortfolioSchema),
    PortfolioController.createPortfolio,
);

export default router;

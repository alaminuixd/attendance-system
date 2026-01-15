import { Router } from 'express';
import authRouter from './auth.routers.js';

const router = Router();

router.use('/api/v1/auth', authRouter);

export default router;

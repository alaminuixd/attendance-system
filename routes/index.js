import { Router } from 'express';
import authRouter from './auth.routes.js';
import userRouter from './user.routes.js';
import verifyToken from '../middlewares/verify.token.js';

const router = Router();

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/users', verifyToken, userRouter);

export default router;

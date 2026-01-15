import { Router } from 'express';
import verifyToken from '../middlewares/verify.token.js';
import {
    healthController,
    loginController,
    privateRouteController,
    registerController,
} from '../controllers/auth.controllers.js';

const authRouter = Router();

authRouter.get('/health', healthController);
authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/private', verifyToken, privateRouteController);

export default authRouter;

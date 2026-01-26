import { Router } from 'express';
import verifyToken from '../middlewares/verify.token.js';
import { getUsers } from '../controllers/users.controller.js';
import userController from '../controllers/users.controller.js';

const userRouter = Router();

userRouter.get('/', userController.getUsers);
// userRouter.post('/', userController.getUserById);
userRouter.get('/:userId', userController.getUserById);
userRouter.patch('/:userId', async (req, res, next) => {});
userRouter.delete('/:userId', async (req, res, next) => {});

export default userRouter;

/**
 * OPTIONAL
 * Group routes by path for readability
 * This is purely stylistic, but very common in clean codebases:
 */

/* userRouter
  .route('/')
  .get(async (req, res, next) => {})
  .post(async (req, res, next) => {});

userRouter
  .route('/:userId')
  .get(async (req, res, next) => {})
  .patch(async (req, res, next) => {})
  .delete(async (req, res, next) => {});
 */

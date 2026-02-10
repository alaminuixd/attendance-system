import { Router } from 'express';
import userController from '../controllers/users.controller.js';

const userRouter = Router();
// router.use('/api/v1/users', verifyToken, userRouter);
userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.postUser);
userRouter.get('/:userId', userController.getUserById);
userRouter.patch('/:userId', userController.patchUserById);
userRouter.put('/:userId', userController.putUserById);
userRouter.delete('/:userId', userController.deleteUserById);

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

import { Router } from 'express';
import authRouter from './auth.routes.js';
import userRouter from './user.routes.js';
import verifyToken from '../middlewares/verify.token.js';
import adminAttendanceRouter from './admin.attendance.routes.js';
import studentAttendanceRouter from './student.attendance.routes.js';

const router = Router();

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/users', verifyToken, userRouter);
router.use('/api/v1/admin/attendance', verifyToken, adminAttendanceRouter);
router.use('/api/v1/student/attendance', verifyToken, studentAttendanceRouter);

export default router;

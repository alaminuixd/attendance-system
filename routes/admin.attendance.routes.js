import { Router } from 'express';
import {
    getEnable,
    getDisable,
    getStatus,
} from '../controllers/admin.attendance.controllers.js';

const adminAttendanceRouter = Router();

adminAttendanceRouter.get('/enable', getEnable);
adminAttendanceRouter.get('/disable', getDisable);
adminAttendanceRouter.get('/status', getStatus);

export default adminAttendanceRouter;

import { Router } from 'express';
import {
    getAttendance,
    getAttendanceStatus,
} from '../controllers/student.attendance.controllers.js';

const studentAttendanceRouter = Router();

studentAttendanceRouter.get('/status', getAttendanceStatus);
studentAttendanceRouter.get('/:id', getAttendance);

export default studentAttendanceRouter;

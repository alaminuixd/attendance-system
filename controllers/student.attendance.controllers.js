import AdminAttendance from '../models/AdminAttendance.js';
import StudentAttendance from '../models/StudentAttendance.js';
import createError from '../utils/create.error.js';

export const getAttendance = async (req, res, next) => {
    const { id } = req.params;
    try {
        // find admin attendance data
        const adminAttendance = await AdminAttendance.findById(id);
        if (!adminAttendance) {
            throw createError('Attendance not found', 404);
        }
        // Prevent duplicate registration
        let attendance = await StudentAttendance.findOne({
            adminAttendance: id,
            user: req.user._id,
        });
        if (attendance) {
            throw createError('Already registered', 409);
        }

        attendance = new StudentAttendance({
            user: req.user._id,
            adminAttendance: adminAttendance._id,
        });
        await attendance.save();
        return res.status(201).json(attendance);
    } catch (error) {
        next(error);
    }
};
export const getAttendanceStatus = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

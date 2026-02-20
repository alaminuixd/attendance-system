import { addMinutes, isAfter } from 'date-fns';
import AdminAttendance from '../models/AdminAttendance.js';
import userServices, { findUserByProperty } from '../services/user.services.js';
import createError from '../utils/create.error.js';
export const getEnable = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });
        if (running) throw createError('Attendance already running!', 409);
        const attendance = new AdminAttendance({});
        await attendance.save();
        return res
            .status(201)
            .json({ message: 'Enabled Successful', attendance });
    } catch (error) {
        next(error);
    }
};

export const getStatus = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });
        if (!running) throw createError('Attendance is not running.', 400);

        const started = addMinutes(
            new Date(running.createdAt),
            running.timeLimit
        );
        console.log(isAfter(new Date(), started));
        if (isAfter(new Date(), started)) {
            running.status = 'COMPLETED';
            await running.save();
        }
        return res.status(200).json(running);
    } catch (error) {
        next(error);
    }
};

export const getDisable = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });
        if (!running) throw createError('Attendance is not running.', 400);
        running.status = 'COMPLETED';
        await running.save();
        return res.status(201).json({ message: 'Disable Successful', running });
    } catch (error) {
        next(error);
    }
};

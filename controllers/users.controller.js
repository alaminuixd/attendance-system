import mongoose from 'mongoose';
import User from '../models/User.js';
import createError from '../utils/create.error.js';
import { sanitizeData, sanitizeUser } from '../utils/user.utils.js';
import userService from '../services/user.services.js';
import authService from '../services/auth.services.js';

export const getUsers = async (req, res, next) => {
    try {
        const users = await userService.findUsers();
        const resUsers = sanitizeData(users, ['password', 'roles']);
        return res.status(200).json(resUsers);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    const { userId } = req.params;
    // ✅ prevent mongoose CastError
    if (!mongoose.isValidObjectId(userId)) {
        return next(createError('Invalid user id', 400));
    }
    try {
        const foundUser = await userService.findUserByProperty('_id', userId);
        if (!foundUser) throw createError('User not found!', 404);
        console.log(foundUser);
        res.status(200).json({ foundUser });
    } catch (error) {
        next(error);
    }
};

export const postUser = async (req, res, next) => {
    const { name, email, password, roles, accountStatus } = req.body;
    if (!name || !email || !password) {
        throw createError('Missing required fields!');
    }
    try {
        let user = await authService.registerService({
            name,
            email,
            password,
            roles,
            accountStatus,
        });
        user = sanitizeData(user, ['password', 'roles', 'accountStatus']);
        return res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const putUserById = async (req, res, next) => {
    const { userId } = req.params;
    const { name, email, roles, accountStatus } = req.body;
    try {
        const user = await userService.updateUser(userId, {
            name,
            email,
            roles,
            accountStatus,
        });
        if (!user) {
            throw createError('User not found', 404);
        }
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const patchUserById = async (req, res, next) => {
    const { userId } = req.params;
    const { name, roles, accountStatus } = req.body;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw createError('Invalid user ID', 400);
    }
    try {
        let user = await userService.findUserByProperty('_id', userId);
        if (!user) throw createError('User not found', 404);
        user.name = name ?? user.name;
        user.roles = roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;
        await user.save();
        user = sanitizeData(user, ['password', 'roles', 'accountStatus']);
        return res.status(200).json({ message: 'Update Success', user });
    } catch (error) {
        next(error);
    }
};

export const deleteUserById = async (req, res, next) => {
    const userId = req.params.userId;
    if (!userId) throw createError('Missing ID', 400);
    try {
        const deleted = await userService.deleteUserService(userId);
        return res.status(203).json({ message: 'User deleted', deleted });
    } catch (error) {
        next(error);
    }
};

export default {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById,
};

import mongoose from 'mongoose';
import User from '../models/User.js';
import userService from '../services/user.services.js';
import createError from '../utils/create.error.js';

export const getUsers = async (req, res, next) => {
    try {
        const users = await userService.findUsers();
        return res.status(200).json(users);
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

export const postUser = async (req, res, next) => {};

export const putUserById = async (req, res, next) => {};

export const patchUserById = async (req, res, next) => {};

export const deleteUserById = async (req, res, next) => {};

export default {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById,
};

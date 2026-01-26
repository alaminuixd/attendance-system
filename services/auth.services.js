/**
 * Different services should be associated to their own controller
 * For example: auth services will be with auth controllers
 *              user services will be with user controllers
 */
import User from '../models/User.js';
import { doHash, doHashCompare } from '../utils/hashing.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SEC, NODE_ENV } from '../config/env.js';
import { findUserByProperty, createNewUser } from './user.services.js';
import { sanitizeUser } from '../utils/user.utils.js';
import createError from '../utils/create.error.js';

export const registerService = async ({ name, email, password }) => {
    const foundUser = await findUserByProperty('email', email); //User.findOne({ email });
    if (foundUser) throw createError('User already exists!', 409);
    password = await doHash(password);
    return createNewUser({ name, email, password });
};

/**
 * ===============================
 * LOGIN SERVICE
 * ===============================
 * Contains business logic for authentication.
 * - Finds user by email
 * - Verifies password
 * - Generates JWT
 * - Returns sanitized user data
 */
export const loginService = async ({ email, password }) => {
    // const user = await User.findOne({ email });
    const user = await findUserByProperty('email', email);
    console.log(`User is: ${user}`);
    if (!user) throw createError('Invalid credentials!', 404);
    const isValid = await doHashCompare(password, user.password);
    console.log(isValid);
    if (!isValid) throw createError('Invalid credentials!', 400);
    // console.log(user._doc.password);
    // console.log(user._doc.email);
    const payload = {
        sub: user._id.toString(),
        name: user.name,
        email: user.email,
        roles: user.roles,
        accountStatus: user.accountStatus,
    };
    const expires = 30;
    const token = jwt.sign(payload, ACCESS_TOKEN_SEC, {
        expiresIn: `${expires}m`,
    });
    const userObj = sanitizeUser(user, [
        'password',
        '__v',
        'roles',
        'accountStatus',
    ]);
    return { token, userObj, expires };
};

import User from '../models/User.js';
import { doHash, doHashCompare } from '../utils/hashing.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SEC, NODE_ENV } from '../config/env.js';
import { registerService, loginService } from '../services/auth.services.js';

export const healthController = async (req, res) => {
    try {
        res.status(200).json({ message: 'Success' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error!', error });
    }
};
export const registerController = async (req, res, next) => {
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    email = email.toLowerCase();
    try {
        const user = await registerService({ name, email, password });
        res.status(201).json({ message: 'New user created!', user });
    } catch (error) {
        next(error);
    }
};

export const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Both fields are required' });
    }
    try {
        const { token, userObj, expires } = await loginService({
            email,
            password,
        });
        res.cookie('accessToken', `Bearer ${token}`, {
            expires: new Date(Date.now() + expires * 60 * 1000),
            httpOnly: NODE_ENV === 'production',
            secure: NODE_ENV === 'production',
            sameSite: 'strict',
        })
            .status(200)
            .json({ message: 'Login Success!', token, userObj });
    } catch (error) {
        next(error);
    }
};

export const privateRouteController = (req, res) => {
    try {
        return res.status(200).json({ message: 'This is the private route' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error!', error });
    }
};

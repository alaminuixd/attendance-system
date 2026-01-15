import { ACCESS_TOKEN_SEC } from '../config/env.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export default async function verifyToken(req, res, next) {
    try {
        let token = null;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        ) {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies?.accessToken) {
            token = req.cookies.accessToken.split(' ')[1];
        }
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        const tokenPayload = jwt.verify(token, ACCESS_TOKEN_SEC);
        const user = await User.findById(tokenPayload.sub).select(
            '-password -accountStatus'
        );
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        console.log(user);

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error!', error });
    }
}
/* export default function verifyToken(req, res, next) {
    try {
        let token = null;

        // 1️⃣ From Authorization header (Bearer)
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        // 2️⃣ From cookies
        else if (req.cookies?.accessToken) {
            token = req.cookies.accessToken;
        }

        console.log(token);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized task' });
        }

        req.token = token; // attach for next middleware
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error!', error });
    }
} */

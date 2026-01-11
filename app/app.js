import express from 'express';
import { middleware } from './middleware.js';
import { notFoundErrorHandler, globalErrorHandler } from './error.js';
import User from '../models/User.js';
import { doHash, doHashCompare } from '../utils/hashing.js';

const app = express();
app.use(middleware);

// ROUTES
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Success' });
});

app.post('/register', async (req, res, next) => {
    let { name, email, password } = req.body;
    email = email.toLowerCase();
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    try {
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(409).json({
                message: 'User already exists!',
            });
        }
        password = await doHash(password);
        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();
        console.log(newUser);
        res.status(201).json({ message: 'New user created!', user: newUser });
    } catch (error) {
        next(error);
    }
});

app.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Both fields are required' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials!' });
        }
        const isValid = await doHashCompare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }
        console.log(user._doc.password);
        console.log(user._doc.email);
        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.__v;
        delete userObj.roles;
        delete userObj.accountStatus;
        return res.status(200).json({ message: 'Login Success!', userObj });
    } catch (error) {
        next(error);
    }
});

// 404 Error handling middleware
app.use(notFoundErrorHandler);

// Global Error handling middleware
app.use(globalErrorHandler);

export default app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
export const middleware = [
    morgan('dev'),
    cors(),
    express.json(),
    cookieParser(),
];

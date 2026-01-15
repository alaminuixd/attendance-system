import express from 'express';
import { middleware } from './middleware.js';
import {
    notFoundErrorHandler,
    globalErrorHandler,
} from '../utils/global.error.js';

import router from '../routes/index.js';

const app = express();
app.use(middleware);

//********** ROUTERS ************/
app.use(router);

// 404 Error handling middleware
app.use(notFoundErrorHandler);
// Global Error handling middleware
app.use(globalErrorHandler);

export default app;

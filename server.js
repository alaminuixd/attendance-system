import http from 'http';
import app from './app/app.js';
import dbConnection from './db/db.connection.js';

const PORT = process.env.PORT || 4001;
const MONGO_URI =
    process.env.MONGO_URI || 'mongodb://localhost:27017/attendance-db';
const server = http.createServer(app);

async function initServer() {
    try {
        const conn = await dbConnection(MONGO_URI);
        console.log('MongoDB connected:', conn.readyState);

        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error during server initialization:', error);
        process.exit(1); // exit on DB failure
    }
}

initServer();

// Optional: Graceful shutdown
process.on('SIGINT', async () => {
    console.log('SIGINT received. Shutting down...');
    server.close(() => console.log('Server closed'));
    process.exit(0);
});

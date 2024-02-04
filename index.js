import express from 'express';
import middleware from './config/middleware.js';
import routes from './routes/index.js';
import connectToDatabase from './config/db.js';
import bodyParser from 'body-parser'
import cors from 'cors';

const app = express();
const port = process.env.PORT;

const startServer = async () => {
    app.use(cors());
    await connectToDatabase();
    app.use(middleware)
    app.use(bodyParser.json());
    app.use('/api', routes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer()
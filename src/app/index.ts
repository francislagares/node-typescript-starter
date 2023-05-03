import 'module-alias/register';

import { databaseConnection } from '@/config/database';
import express from 'express';
import helmet from 'helmet';
import indexRouter from '@/routes/index.router';

const app = express();
databaseConnection();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// Routes
app.use('/', indexRouter);

export { app };

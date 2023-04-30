import 'module-alias/register';

import { databaseConnection } from '@/config/database';
import express from 'express';
import indexRouter from '@/routes/indexRouter';

const app = express();
databaseConnection();

// Middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes...
app.use('/', indexRouter);

export { app };

import 'module-alias/register';

import { databaseConnection } from '@/config/database';
import indexRouter from '@/routes/indexRouter';
import express from 'express';

const app = express();
databaseConnection();

// Middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes...
app.use('/', indexRouter);

export { app };

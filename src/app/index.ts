import 'module-alias/register';

import express from 'express';
import indexRouter from '@/routes/indexRouter';

const app = express();

// Middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes...
app.use('/', indexRouter);

export { app };

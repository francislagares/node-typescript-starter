import express, { Request, Response } from 'express';

const app = express();

// Middlewares...
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes...
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Welcome to the home page',
  });
});

export { app };

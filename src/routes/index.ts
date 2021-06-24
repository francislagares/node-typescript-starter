import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Welcome to the home page',
  });
});

export default router;

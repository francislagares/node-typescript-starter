import { Request, Response } from 'express';

function get(req: Request, res: Response): void {
  res.json({
    status: 200,
    message: 'Welcome to the home page',
  });
}

export default {
  get,
};

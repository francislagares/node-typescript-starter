import express, { Router } from 'express';

import IndexController from '@/controllers/index.controller';

export class IndexRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public getRoutes(): Router {
    const controller = new IndexController();

    this.router.get('/', controller.getIndex);
    this.router.get('/:id', controller.getApibyId);

    return this.router;
  }
}

export const indexRoutes = new IndexRoutes();

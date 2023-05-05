import { Application } from 'express';
import { BASE_URL } from '@/config/environment';
import { indexRoutes } from './index.router';

const applicationRoutes = (app: Application) => {
  const routes = () => {
    app.use(BASE_URL, indexRoutes.getRoutes());
  };

  routes();
};

export default applicationRoutes;

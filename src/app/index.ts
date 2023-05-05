import { Application, json, urlencoded } from 'express';
import {
  CLIENT_URL,
  CREDENTIALS,
  NODE_ENV,
  ORIGIN,
  PORT,
} from '@/config/environment';

import { ErrorMiddleware } from '@/middlewares/error.middleware';
import applicationRoutes from '@/routes/index';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { getDbConnection } from '@/config/database';
import helmet from 'helmet';
import hpp from 'hpp';
import logger from '@/utils/logger';

export class App {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public listen(): void {
    this.connectDatabase();
    this.securityMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  public getServer() {
    return this.app;
  }

  private securityMiddleware(app: Application): void {
    app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    app.use(hpp());
    app.use(helmet());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.use(cookieParser());
    app.use(
      cors({
        origin: CLIENT_URL,
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      }),
    );
  }

  private routesMiddleware(app: Application): void {
    applicationRoutes(app);
  }

  private globalErrorHandler(app: Application): void {
    app.use(ErrorMiddleware);
  }

  private connectDatabase(): void {
    getDbConnection();
  }

  private startServer(app: Application): void {
    logger.info(`------ NODE_ENV: ${NODE_ENV} ------`);
    logger.info(`Server has started with process ${process.pid}`);
    app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  }
}

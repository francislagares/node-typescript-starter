export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      BASE_URL: string;
      CLIENT_URL: string;
      LOG_DIR: string;
      ORIGIN: string;
      JWT_SECRET: string;
      NODE_ENV: 'test' | 'development' | 'production';
    }
  }
}

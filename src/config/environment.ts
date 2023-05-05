import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  PORT,
  BASE_URL,
  CLIENT_URL,
  JWT_SECRET,
  LOG_DIR,
  ORIGIN,
} = process.env;

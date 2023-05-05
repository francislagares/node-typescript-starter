import logger from '@/utils/logger';
import { PrismaClient } from '@prisma/client';

const database = new PrismaClient();

export const getDbConnection = () => {
  const connect = async () => {
    await database.$connect().then(() => {
      logger.info('Successfully connected to database!');
    });
  };

  connect()
    .then(async () => {
      await database.$disconnect();
    })
    .catch(async e => {
      console.log(e);
      await database.$disconnect();
      process.exit(1);
    });
};

export default database;

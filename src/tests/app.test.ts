import { Server } from '@/server';
import request from 'supertest';

describe('App Index', () => {
  test('[GET] / with response statusCode 200 ', async () => {
    const app = new Server().init;

    // await request(app.getServer()).get('/').expect(200);

    await request(app).get('/api/v1').expect(200);
  });
});

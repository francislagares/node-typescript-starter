import { app } from '@/app';
import request from 'supertest';

describe('App Index', () => {
  test('[GET] / with response statusCode 200 ', async () => {
    await request(app).get('/').expect(200);
  });
});

import supertest from 'supertest';
import { app } from '../app';

describe('App Index', () => {
  test('[GET] / with response statusCode 200 ', async () => {
    await supertest(app).get('/').expect(200);
  });
});

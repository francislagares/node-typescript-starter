import { App } from '@/app';
import express from 'express';
import request from 'supertest';

describe('App Index', () => {
  test('[GET] / with response statusCode 200 ', async () => {
    const app = new App(express()).getServer();

    // await request(app.getServer()).get('/').expect(200);

    await request(app).get('/').expect(200);
  });
});

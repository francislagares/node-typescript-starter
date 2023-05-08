import express, { Application } from 'express';

import { App } from '@/app';
import HealthController from '@/controllers/health.controller';
import request from 'supertest';

describe('HealthController', () => {
  let app: Application;

  beforeAll(() => {
    app = new App(express()).getServer();

    const controller = new HealthController();
    app.get('/', controller.getHealth);
  });

  it('GET / should return status 200 and { health: "OK!" } when GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ health: 'OK!' });
  });
});

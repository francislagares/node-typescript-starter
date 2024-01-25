import express, { Application } from 'express';

import { App } from '@/app';
import HealthController from '@/controllers/health.controller';
import request from 'supertest';
import { beforeAll, describe, expect, test } from 'vitest';

describe('HealthController', () => {
  let app: Application;

  beforeAll(() => {
    app = new App(express()).getServer();

    const controller = new HealthController();
    app.get('/health', controller.getHealth);
  });

  test('GET /health should return status 200 and { health: "OK!" } when GET /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ health: 'OK!' });
  });
});

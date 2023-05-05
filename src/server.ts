import { App } from '@/app';
import express from 'express';

export class Server {
  public init() {
    const httpServer = new App(express());

    httpServer.listen();
  }
}

const server = new Server();

server.init();

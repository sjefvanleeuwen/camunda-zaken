import {ZrcServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ZrcServerApplication};

export async function main(options?: ApplicationConfig) {
  const app = new ZrcServerApplication(options);
  await app.boot();
  await app.start();
  return app;
}

import { router as authRouter } from './auth.js';
import { router as siteRouter } from './site.js';

export const routes = (app) => {
  app.use('/auth', authRouter);
  app.use('/', siteRouter);
};

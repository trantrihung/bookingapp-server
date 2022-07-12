import { router as authRouter } from './auth.js';
import { router as siteRouter } from './site.js';
import { router as hotelsRouter } from './hotels.js';
import { router as usersRouter } from './users.js';
import { router as roomRouter } from './rooms.js';

export const routes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/hotels', hotelsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/rooms', roomRouter);
  app.use('/api', siteRouter);

  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Some thing went wrong!';
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
};

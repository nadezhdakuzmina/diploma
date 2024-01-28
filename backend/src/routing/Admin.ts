import AdminJSExpress from '@adminjs/express';
import { ADMINJS_SECRET } from '@constants';

import { authenticate } from '@entities/User/helpers';

import { Admin } from '@views';

export const AdminPath = '/admin';

export const AdminRouter = AdminJSExpress.buildAuthenticatedRouter(
  Admin,
  {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: ADMINJS_SECRET,
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
    secret: ADMINJS_SECRET,
    cookie: {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
    },
    name: 'adminjs',
  }
);

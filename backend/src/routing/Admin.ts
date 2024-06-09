import AdminJSExpress from '@adminjs/express';
import { ADMINJS_SECRET } from '@constants';

import { authenticateAdmin } from '@entities/User/authentication';

import { Admin } from '@views';

export const AdminPath = '/admin';

export const AdminRouter = AdminJSExpress.buildAuthenticatedRouter(
  Admin,
  {
    authenticate: authenticateAdmin,
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

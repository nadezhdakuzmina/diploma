import AdminJS from 'adminjs';
import * as AdminJSTypeorm from '@adminjs/typeorm';

import Resources from './resources';
import { IS_DEV } from '@constants';

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});

const Admin = new AdminJS({
  resources: Resources,
});

if (IS_DEV) {
  Admin.watch();
}

export default Admin;

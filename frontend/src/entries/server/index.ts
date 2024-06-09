import express from 'express';

import { SERVER_PORT } from '@constants';

import { mainRouter } from './routing';

const expressApp = express();

expressApp.use(mainRouter);

expressApp.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});

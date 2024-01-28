import { createDataSource } from './application/Database';
import { startServer } from './application/HttpServer';

import { User } from './entities/User';

createDataSource({
  entities: [User],
})
  /**
   * Роутинг подключаем ассинхронно
   * Так как там происходит создание инстанса AdminJS
   * А его инициализация должна проходить после создания инстанса базы
   */
  .then(() => import('./routing'))
  .then(({ mainRouter }) => startServer(mainRouter));

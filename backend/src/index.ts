import { createDataSource } from './application/Database';
import { startServer } from './application/HttpServer';

import { User } from './entities/User';
import { Country } from '@entities/Country';
import { Thread } from '@entities/Thread';
import { MapPoint } from '@entities/MapPoint';
import { Reaction } from '@entities/Reaction';
import { Service } from '@entities/Service';
import { Tag } from '@entities/Tag';
import { City } from '@entities/City';
import { Comment } from '@entities/Comment';
import { Image } from '@entities/Image';

createDataSource({
  entities: [
    User,
    Country,
    City,
    Thread,
    Comment,
    Image,
    MapPoint,
    Reaction,
    Service,
    Tag,
  ],
})
  /**
   * Роутинг подключаем ассинхронно
   * Так как там происходит создание инстанса AdminJS
   * А его инициализация должна проходить после создания инстанса базы
   */
  .then(() => import('./routing'))
  .then(({ mainRouter }) => startServer(mainRouter));

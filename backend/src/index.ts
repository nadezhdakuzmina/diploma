import { createDataSource } from './application/Database';
import { startServer } from './application/HttpServer';

import { User } from '@entities/User';
import { Country } from '@entities/Country';
import { City } from '@entities/City';
import { Post } from '@entities/Post';
import { Thread } from '@entities/Thread';
import { Reaction } from '@entities/Reaction';
import { Image } from '@entities/Image';
import { Message } from '@entities/Message';
import { Tag } from '@entities/Tag';

createDataSource({
  entities: [User, Country, City, Post, Thread, Reaction, Image, Message, Tag],
})
  /**
   * Роутинг подключаем ассинхронно
   * Так как там происходит создание инстанса AdminJS
   * А его инициализация должна проходить после создания инстанса базы
   */
  .then(() => import('./routing'))
  .then(({ mainRouter }) => startServer(mainRouter));

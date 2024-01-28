import { DataSource } from 'typeorm';

import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_BASE,
  MAX_QUERY_EXECUTION_TIME,
} from '@constants';

import type { DataSouceOptions } from './types';
import type { NextFunction } from 'express';
import type { Request, Response } from '@types';

let DataBaseSource: DataSource;

export const createDataSource = async (options: DataSouceOptions) => {
  const { entities } = options;

  DataBaseSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_BASE,
    synchronize: true,
    entities,
    migrations: [],
    maxQueryExecutionTime: MAX_QUERY_EXECUTION_TIME,
  });

  return DataBaseSource.initialize().then(() => DataBaseSource);
};

export const useDataSource = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  req.dataSource = DataBaseSource;
  next();
};

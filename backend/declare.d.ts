import type { DataSource } from 'typeorm';

declare global {
  namespace Express {
    interface Request {
      dataSource: DataSource;
    }
  }
}

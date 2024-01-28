import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

export interface DataSouceOptions {
  entities: BaseDataSourceOptions['entities'];
}

export type WsMessage<T> = {
  type: string;
  payload: T;
};

export type WsMessageCallback<T> = (
  message: WsMessage<T>
) => Promise<void> | void;

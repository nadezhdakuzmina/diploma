import type { UserState } from '@data/reducers/users';
import type { State } from '../types';

const makeErrorHandler = (reqId: string) => (error: Error) => console.error(
  `[${new Date()}](${reqId}) -`,
  error
);

export const initStore = async (token?: string): Promise<State> => {
  const reqId = Math.floor(Math.random() * 10e10).toString();

  const users: UserState = {
    users: [],
  };

  return {
    users,
  };
};

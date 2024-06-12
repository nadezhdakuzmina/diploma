import type { UserData } from '@types';

export const getShortUserName = (user: Pick<UserData, 'firstName' | 'lastName'>): string => {
  return `${user.firstName} ${user.lastName[0]}.`
};

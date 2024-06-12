import type { UserData } from '@types';

export const getUserName = (user: Pick<UserData, 'firstName' | 'lastName'>): string => {
	return `${user.firstName} ${user.lastName}`
};

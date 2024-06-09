import type { Response } from '@types';

export type SetCookieParams = {
  secure?: boolean;
  httpOnly?: boolean;
  domain?: string;
  path?: string;
  expires?: Date;
  maxAge?: number;
  sameSite?: boolean;
};

export const setCookie = (
  res: Response,
  key: string,
  value: string | number,
  params: SetCookieParams = {}
) => {
  const { secure, httpOnly, domain, path, expires, maxAge, sameSite } = params;

  const cookie = [
    `${key}=${value}`,
    secure && 'Secure',
    httpOnly && 'HttpOnly',
    domain && `Domain=${domain}`,
    path && `Path=${path}`,
    expires && `Expires=${expires.toUTCString()}`,
    maxAge !== undefined && `Max-Age=${maxAge}`,
    sameSite === false && 'SameSite=None',
  ]
    .filter(Boolean)
    .join('; ');

  res.setHeader('Set-Cookie', cookie);
};

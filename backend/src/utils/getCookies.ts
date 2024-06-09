import type { Request } from '@types';

export const getCookies = (req: Request): Record<string, string> => {
  const { headers } = req;

  let cookieHeader = headers['Cookie'] || headers['cookie'];

  if (!cookieHeader) {
    return {};
  }

  if (Array.isArray(cookieHeader)) {
    cookieHeader = cookieHeader.reduce(
      (acc, item) => [acc, item].join('; '),
      ''
    );
  }

  return cookieHeader
    .split(/;\s?/)
    .reduce<Record<string, string>>((acc, item) => {
      const [_, key, value] = item.match(/([^=]+)=(.*)/);

      acc[key] = value;

      return acc;
    }, {});
};

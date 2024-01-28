import { readFileSync } from 'fs';

export const readEnv = (path: string): Record<string, string> => {
  const buffer = readFileSync(path);
  const lines = buffer.toString().split('\n');

  return lines.reduce((params, line) => {
    const [_, key, value] = line.match(/^([^#=]+)\s*=\s*(.+)$/) || [];

    if (key && value) {
      params[key] = value;
    }

    return params;
  }, {});
};

export const applyToEnv = (params: Record<string, string>) => {
  process.env = {
    ...process.env,
    ...params,
  };
};

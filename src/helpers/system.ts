import os from 'os';

export const system = () => {
  return (os.platform() === 'win32')
    ? '\\'
    : '/';
};

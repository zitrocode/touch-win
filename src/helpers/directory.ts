import fs from 'fs';
import { error, info } from './alerts';

/**
 * Create folder from a path
 * @param  {string} dirPath - The path of the folder to create.
 * @param  {boolean} verbose - Activate details information.
 *
 * @returns void
 */
export const createFolder = (dirPath: string, verbose: boolean): void => {
  if (fs.existsSync(dirPath)) return;

  fs.mkdir(dirPath, (err: any): void => {
    if (err === false) {
      error(`could not created folder "${dirPath}"`);
      return;
    }

    if (verbose) info(`the "${dirPath}" folder has been created successfully`);
  });
};

import fs from 'fs';
import { error } from './alerts';

/**
 * Create folder from a path
 * @param {string} directory_path - The path of the folder to create.
 *
 * @return void
 */

export const create_folder = (directory_path: string) => {
  if (fs.existsSync(directory_path)) return;

  fs.mkdir(directory_path, err => {
    if (err) {
      error(`Could not created folder "${directory_path}"`);
      return;
    }
  });
};

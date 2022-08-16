import fs from 'fs';
import { warning, error, success } from './alerts';

/**
 * Create file from path
 * @param {string} filename - The path to the file to create.
 *
 * @return void
 */

export const create_file = (filename: string) => {
  if (fs.existsSync(filename)) {
    warning(`"${filename}" al ready exists`);
    return;
  }

  // Create file if it doesn't exist's
  fs.writeFile(filename, '', err => {
    if (err) {
      error(`Could not create file "${filename}"`);
      return;
    }

    success(`Successfully created file "${filename}"`);
  });
};

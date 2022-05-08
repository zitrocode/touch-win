import fs from "fs";
import { warning, error, success } from "./alerts";

/**
 * Create file from path.
 * @param  {string} filename - The path to the file to create.
 *
 * @returns void
 *
 * Currently this code fragment works correctly,
 * however, details still need to be polished.
 */
export const createFile = (filename: string): void => {
  if (fs.existsSync(filename)) {
    warning(`"${filename}" already exists`);
    return;
  }

  // Create file if it doesn't exist's
  fs.writeFile(filename, "", (err) => {
    if (err) {
      error(`could not create file ${filename}.`);
      return;
    }

    success(`successfully created file "${filename}"`);
  });
};

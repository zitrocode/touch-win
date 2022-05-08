import fs from "fs";
import { error, info } from "./alerts";

/**
 * Create folder from a path
 * @param  {string} dirPath - The path of the folder to create.
 * @param  {boolean=false} verbose - Activate details information.
 *
 * @returns void
 */
export const createFolder = (dirPath: string, verbose: boolean): void => {
  if (fs.existsSync(dirPath)) return;

  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      error(`could not created folder "${dirPath}"`);
      return;
    }

    if (verbose) info(`the "${dirPath}" folder has been created successfully`);
  });
};

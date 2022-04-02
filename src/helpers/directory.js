const fs = require("fs");
const alerts = require("./alerts");

/**
 * Create folder from a path.
 * @param {string} dirPath - The path of the folder to create.
 * @param {boolean} verbose - Actived details information (default: false).
 */

const create_directory = (dirPath, verbose) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, { recursive: true }, (error) => {
      if (error) {
        alerts.error(`could not created folder "${dirPath}"`);
        return;
      }

      verbose &&
        alerts.info(`The "${dirPath}" folder has been created successfully`);
    });
  }
};

module.exports = create_directory;

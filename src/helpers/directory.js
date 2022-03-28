const fs = require("fs");
const colors = require("colors");

/**
 * Create folder from a path.
 * @param {string} dirPath - The path of the folder to create.
 * @param {boolean} verbose - Actived details information (default: false).
 */

const create_directory = (dirPath, verbose) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, { recursive: true }, (error) => {
      if (error) {
        console.log(colors.red(`could not created folder "${dirPath}"`));
        return;
      }

      verbose &&
        console.log(
          colors.gray(`The "${dirPath}" folder has been created successfully`)
        );
    });
  }
};

module.exports = create_directory;

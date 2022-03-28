const fs = require("fs");
const colors = require("colors");

/**
 * Create file from a path.
 * @param {path} - The path of the file to create.
 *
 * Currenty this code fragment works correctly,
 * however, details still need to be polished.
 */

const touch = (filename) => {
  // NOTE: Add functionality to be able to replace the file.
  if (fs.existsSync(filename)) {
    // If the file exists, we just display a warning.
    console.log(colors.yellow(`"${filename}" already exists`));
    return;
  }

  // Create file
  fs.writeFile(filename, "", (error) => {
    if (error) {
      console.log(colors.red(`could not create file ${filename}. ${error}`));
      return;
    }

    console.log(colors.green(`successfully created "${filename}"`));
  });
};

module.exports = touch;

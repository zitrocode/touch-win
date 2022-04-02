const fs = require("fs");
const alerts = require("./alerts");

/**
 * Create file from a path.
 * @param {path} - The path of the file to create.
 *
 * Currenty this code fragment works correctly,
 * however, details still need to be polished.
 */

const file = (filename) => {
  // NOTE: Add functionality to be able to replace the file.
  if (fs.existsSync(filename)) {
    // If the file exists, we just display a warning.
    alerts.warning(`"${filename}" already exists`);
    return;
  }

  // Create file
  fs.writeFile(filename, "", (error) => {
    if (error) {
      alerts.error(`could not create file ${filename}. ${error}`);
      return;
    }

    alerts.success(`successfully created "${filename}"`);
  });
};

module.exports = file;

const fs = require("fs");
const path = require("path");
const colors = require("colors");

const touch = (filename) => {
  filename = path.normalize(filename);

  if (fs.existsSync(filename)) {
    console.log(colors.yellow(`"${filename}" already exists`));
    return;
  }

  fs.writeFile(filename, "", (error) => {
    if (error) {
      console.log(colors.red(`could not create file ${filename}. ${error}`));
      return;
    }

    console.log(colors.green(`successfully created "${filename}"`));
  });
};

module.exports = touch;

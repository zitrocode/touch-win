const fs = require("fs");
const colors = require("colors");

const create_directory = (dir_path, verbose) => {
  if (!fs.existsSync(dir_path)) {
    fs.mkdir(dir_path, { recursive: true }, (error) => {
      if (error) {
        console.log(colors.red(`could not created folder "${dir_path}"`));
        return;
      }

      verbose &&
        console.log(
          colors.gray(`The "${dir_path}" folder has been created successfully`)
        );
    });
  }
};

module.exports = create_directory;

#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const colors = require("colors");

const files = process.argv.slice(2);

const touch = (filename) => {
  normalize_path = path.normalize(filename).replaceAll("\\", "/");

  if (fs.existsSync(filename)) {
    console.log(colors.yellow(`"${normalize_path}" already exists`));
    return;
  }

  fs.writeFile(filename, "", (error) => {
    if (error) {
      console.log(
        colors.red(`Could not create file ${normalize_path}. ${error}`)
      );
      return;
    }

    console.log(colors.green(`"${normalize_path}" created`));
  });
};

files.map((filename) => touch(filename));

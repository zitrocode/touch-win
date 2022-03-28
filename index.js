#!/usr/bin/env node

const path = require("path");

const updateNotifier = require("update-notifier");
const pkg = require("./package.json");

const argv = require("./src/bin/cli");
const touch = require("./src/helpers/touch");
const create_directory = require("./src/helpers/directory");

const files = argv._;
const verbose = argv.verbose;

// Show message if there is any update.
const notifier = updateNotifier({pkg});
notifier.notify({
  isGlobal: true,
  message: "Run `{updateCommand}` to update"
});

files.forEach((file) => {
  if (argv.base) {
    file = argv.base + "\\" + file;
  }

  const path_file = path.normalize(file).split("\\");

  let dir_path = ".";
  path_file.forEach((current_path, index) => {
    dir_path = dir_path + "/" + current_path;
    const normalize_path = path.normalize(dir_path);
    if (path_file.length - 1 !== index) {
      // Create directory.
      create_directory(normalize_path, verbose);
      return;
    }

    // Create file.
    touch(normalize_path, verbose);
  });
});

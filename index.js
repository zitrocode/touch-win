#!/usr/bin/env node
const path = require("path");

const updateNotifier = require("update-notifier");
const pkg = require("./package.json");

const argv = require("./src/bin/cli");
const createFile = require("./src/helpers/file");
const createDirectory = require("./src/helpers/directory");
const alerts = require("./src/helpers/alerts");

const files = argv._;
const verbose = argv.verbose;
const template = argv.template;

const opts = {
  error: false,
}

files.forEach((file) => {
  if (argv.base) {
    file = argv.base + "\\" + file;
  }

  if (template) {
    if (!template.includes("[rf]")) {
      opts.error = true;

      alerts.error('Check that the template has "[rf]"');
      return;
    }

    file = template.replace("[rf]", file);
  }

  const path_file = path.normalize(file).split("\\");

  let dir_path = ".";
  path_file.forEach((current_path, index) => {
    dir_path = dir_path + "/" + current_path;
    const normalize_path = path.normalize(dir_path);
    if (path_file.length - 1 !== index) {
      // Create directory.
      createDirectory(normalize_path, verbose);
      return;
    }

    // Create file.
    createFile(normalize_path, verbose);
  });
});

// Show message if there is any update.
const notifier = updateNotifier({ pkg, updateCheckInterval: 100 * 60 * 60 * 24 });
notifier.notify({ isGlobal: true });

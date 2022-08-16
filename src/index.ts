#!/usr/bin/env node
import path from 'path';
import open from 'open';

import { argv } from './lib/cli';
import { info, error } from './helpers/alerts';
import { create_folder } from './helpers/directory';
import { create_file } from './helpers/file';

if (Object.keys(argv).length <= 3 && argv._.length === 0) {
  info(`Use the command "${argv.$0} --help" for help`);
}

if (argv.author) {
  open('https://github.com/sponsors/zitrocode');
}

if (argv._.length !== 0) {
  argv._.forEach((file: string | number) => {
    // Convert file to string
    file = file.toString();
    let base_path = path.join(file);

    if (argv.base) {
      base_path = path.join(argv.base, file);
    }

    if (argv.template) {
      if (!argv.template.includes('[rn]')) {
        error('Check that template has "[rn]"');
        return;
      }

      file = argv.template.replace('[rn]', file);
      base_path = path.join(file);
    }

    const path_split = base_path.split(path.sep);
    let path_file = '.';
    path_split.forEach((currentPath: string, index: number) => {
      path_file = path.normalize(path_file + path.sep + currentPath);

      if (path_split.length - 1 !== index) {
        // Create directory
        create_folder(path_file);
        return;
      }

      // Create file
      create_file(path_file);
    });
  });
}

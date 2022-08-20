#!/usr/bin/env node
import path from 'path';
import chalk from 'chalk';

import argv from './lib/cli';
import { info, error } from './helpers/alerts';
import { create_folder } from './helpers/directory';
import { create_file } from './helpers/file';

(() => {
  if (Object.keys(argv).length <= 3 && argv._.length === 0) {
    info(`Use the command "${argv.$0} --help" for help`);
    return;
  }

  if (argv.a) {
    console.log('Name:', chalk.green('Oscar Ortiz (zitrocode)'));
    console.log('GitHub:', 'https://github.com/sponsors/zitrocode');
    return;
  }

  if (argv._.length !== 0) {
    argv._.forEach((file: string | number) => {
      // Convert file to string
      file = file.toString();
      let base_path = path.join(file);

      if (argv.b) {
        base_path = path.join(argv.b, file);
      }

      if (argv.t) {
        if (!argv.t.includes('[rn]')) {
          error('Check that template has "[rn]"');
          return;
        }

        file = argv.t.replace('[rn]', file);
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
})();

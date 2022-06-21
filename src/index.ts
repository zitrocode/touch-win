#!/usr/bin/env node
import path from 'path';
import updateNotifier from 'update-notifier';
import pkg from '../package.json';

import { argv } from './bin/cli';
import { error } from './helpers/alerts';
import { system } from './helpers/system';
import { createFile } from './helpers/file';
import { createFolder } from './helpers/directory';

const files: string[] = argv._;
const base: string = argv.base;
const template: string = argv.template;
const isVerbose: boolean = argv.verbose;

files.forEach((file: string) => {
  if (base) file = base + system() + file;

  if (template) {
    if (!template.includes('[rn]')) {
      error('check that the template has "[rn]"');
      return;
    }

    file = template.replace('[rn]', file);
  }

  const pathFile: string[] = path.normalize(file).split(system());

  let dirPath = '.';
  pathFile.forEach((currentPath: string, index: number) => {
    dirPath = dirPath + '/' + currentPath;
    const normalizePath: string = path.normalize(dirPath);
    if (pathFile.length - 1 !== index) {
      // Create directory
      createFolder(normalizePath, isVerbose);
      return;
    }

    // Create file
    createFile(normalizePath);
  });
});

// Show message if there is any update.
const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 100 * 60 * 60 * 24,
});
notifier.notify({ isGlobal: true });

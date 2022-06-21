import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const cli = yargs(hideBin(process.argv))
  .usage('Usage: touch-win [options] [file ...]')
  .example('touch-win [options] [file ...]', 'Create file(s)')
  .example(
    'touch-win src/bin/cli.js src/helpers/file.js src/helpers/directory.js',
    'Standard use'
  )
  .example(
    'touch-win --base src/components/new_component Component.js Component.css',
    'Use with option "base"'
  )
  .example(
    'touch-win --template src/components/new_component/Component.[rn] js test.js css',
    'Use with option "template"'
  )
  .example(
    'touch-win --template config/webpack.[rn].js build dev common',
    'Use with option "template"'
  )
  .help('h')
  .wrap(yargs.terminalWidth())
  .alias('h', 'help')
  .option('v', {
    alias: 'verbose',
    type: 'boolean',
    default: false,
    describe: 'Run with verbose logging',
  })
  .option('b', {
    alias: 'base',
    type: 'string',
    describe: 'Base folder to place the file(s)',
  })
  .option('t', {
    alias: 'template',
    type: 'string',
    describe: 'Template to generate files',
  }).argv;

export const argv = JSON.parse(JSON.stringify(cli));

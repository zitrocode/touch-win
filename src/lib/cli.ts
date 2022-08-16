import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface Argv {
  _: (string | number)[];
  base?: string;
  author?: boolean;
  template?: string;
  b?: string;
  a?: boolean;
  t?: string;
  $0: string;
}

const cli = yargs(hideBin(process.argv))
  .scriptName('touch-win')
  .usage('$0 [options] [file ...]')
  .wrap(yargs.terminalWidth())
  .option('a', {
    alias: 'author',
    type: 'boolean',
    describe: 'Show the profile of the author of this package'
  })
  .alias('v', 'version')
  .option('b', {
    alias: 'base',
    type: 'string',
    describe: 'Base folder to place the file(s)'
  })
  .option('t', {
    alias: 'template',
    type: 'string',
    describe: 'Template to generate files'
  })
  .alias('h', 'help')

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
  .help().argv;

export const argv: Argv = JSON.parse(JSON.stringify(cli));

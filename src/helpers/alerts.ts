import chalk from 'chalk';

const log = (msg: string): void => {
  console.log(msg);
};

export const success = (msg: string): void => log(chalk.green(msg));
export const warning = (msg: string): void => log(chalk.yellow(msg));
export const error = (msg: string): void => log(chalk.red(msg));
export const info = (msg: string): void => log(chalk.blue(msg));

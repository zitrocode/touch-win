import colors from "colors";

const print = (data: string) => {
  console.log(data);
};

export const success = (msg: string): void => print(colors.green(msg));
export const warning = (msg: string): void => print(colors.yellow(msg));
export const error = (msg: string) => print(colors.red(msg));
export const info = (msg: string) => print(colors.blue(msg));

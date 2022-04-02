const colors = require("colors");

module.exports = {
  success: (msg) => {
    console.log(colors.green(msg));
  },
  warning: (msg) => {
    console.log(colors.yellow(msg));
  },
  error: (msg) => {
    console.log(colors.red(msg));
  },
  info: (msg) => {
    console.log(colors.blue(msg));
  }
};

const yargs = require("yargs")(process.argv.slice(2))
  .usage("Usage: $0 [options] [file ...]")
  .example("$0 [options] [file ...]", "Create file(s)")
  .help("h")
  .alias("h", "help").argv;

module.exports = yargs;

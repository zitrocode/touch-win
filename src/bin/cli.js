const yargs = require("yargs")(process.argv.slice(2))
  .usage("Usage: $0 [options] [file ...]")
  .example("$0 [options] [file ...]", "Create file(s)")
  .help("h")
  .alias("h", "help")
  .option("v", {
    alias: "verbose",
    type: "boolean",
    default: false,
    describe: "Run with verbose logging",
  }).argv;

module.exports = yargs;

const yargs = require("yargs")(process.argv.slice(2))
  .usage("Usage: touch-win [options] [file ...]")
  .example("touch-win [options] [file ...]", "Create file(s)")
  .help("h")
  .alias("h", "help")
  .option("v", {
    alias: "verbose",
    type: "boolean",
    default: false,
    describe: "Run with verbose logging",
  })
  .option("b", {
    alias: "base",
    type: "string",
    describe: "Base folder to place the file(s)",
  }).argv;

module.exports = yargs;

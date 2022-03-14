#!/usr/bin/env node

const argv = require("./src/bin/cli");
const touch = require("./src/helpers/touch");

const files = argv._;
files.map((file) => touch(file));

# touch-win

> Touch-win allows you to use the Linux "touch" command on Windows.

## About

This project provides a simple solution to create multiple files from a single command. Touch-win simulates the "touch" command found on Linux and UNIX based systems.

## Install

```bash
npm install -g touch-win
```

### Usage

```bash
touch-win [options] [files ...]
```

**Use the command `touch-win -h` or `touch-win --help` for more information**

### Features
- Allows you to create multiple files with a single command.
- Automatically creates the necessary folders for the location of the file to create if it does not exist. `touch-win src/bin/app.js`
#### Examples

```bash
touch-win my_file.txt
```

```bash
touch-win index.html css/style.css js/main.js
```

:warning: **This package is still under development, so it may have some bugs.**
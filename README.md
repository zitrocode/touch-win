# 🧑‍💻 Touch Win

> If you think that touch-win is a great project, consider making a small donation to be able to continue creating more projects like this. <a href="https://github.com/sponsors/zitrocode">GitHub Sponsor</a>.

---

This project provides a simple and fast solution to create multiple files from a single command; Touch-win is inspired by the "touch" command found on Linux and UNIX based systems.

![image](./touch-win-screenshot.jpg)

## ✨ Features

- Allows you to create multiple files with a single command.
- Automatically creates the necessary folders for the location of the file to create if it does not exist.
- Allows you to create files from a base path.
- Allows you to create files from a template.

<!-- ## ⚡️ Requirements -->

## 📦 Installation

Install touch-win with your package manager:

#### NPM

```bash
npm install -g touch-win
```

## 🚀 Usage

```bash
touch-win --help
```

```bash
Usage: touch-win [options] [file ...]

Options:
      --version   Show version number                                                                                                                 [boolean]
  -h, --help      Show help                                                                                                                           [boolean]
  -v, --verbose   Run with verbose logging                                                                                           [boolean] [default: false]
  -b, --base      Base folder to place the file(s)                                                                                                     [string]
  -t, --template  Template to generate files                                                                                                           [string]
Examples:
  touch-win [options] [file ...]                                                   Create file(s)

  touch-win src/bin/cli.js src/helpers/file.js src/helpers/directory.js            Standard use
  touch-win --base src/components/new_component Component.js Component.css         Use with option "base"
  touch-win --template src/components/new_component/Component.[rf] js test.js css  Use with option "template"
  touch-win --template config/webpack.[rf].js build dev common                     Use with option "template"
```

### Base

This option allows you to create files from a base path, this will help you not to repeat the same path in each file.

### Examples

```bash
# Standard use
touch-win src/bin/cli.js src/helpers/file.js src/helpers/directory.js

# Return
successfully created "src\bin\cli.js"
successfully created "src\helpers\files.js"
successfully created "src\helpers\directory.js"
```

```bash
# Use with option "base"
touch-win --base src/components/new_component component.js style.sass

# return
successfully created "src\components\new_component\style.sass"
successfully created "src\components\new_component\component.js"
```

```bash
# Use with option "template"
touch-win --template src/components/NewComponent.[rf] js test.js css

# return
successfully created "src\components\NewComponent.js"
successfully created "src\components\NewComponent.test.js"
successfully created "src\components\NewComponent.css"
```

```bash
# Use with option "template"
touch-win --template config/webpack.[rf].js dev build common

# return
successfully created "config\webpack.dev.js"
successfully created "config\webpack.build.js"
successfully created "config\webpack.common.js"
```

---

**⚠️ WARNING:** This package is still under development, so it may have some bugs.

<br>
<br>

<!-- Basic information -->
<div align="center">
  <a href="https://github.com/zitrocode/touch-win">
    <img src="./images/touch-win-logo.png" alt="Touch Win Logo">
  </a>
  <!-- <h3>Touch Win</h3> -->
  <br>
  <p>
    A tool that will allow you to create multiple files using the terminal in Windows.
  </p>
  <div align="center">
    <a href="https://github.com/sponsors/zitrocode">
      <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/zitrocode?color=green&style=flat-square">
    </a> 
    <a href="https://github.com/zitrocode/touch-win/network">
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/zitrocode/touch-win?style=flat-square">
    </a>
    <a href="https://github.com/zitrocode/touch-win/stargazers">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/zitrocode/touch-win?style=flat-square">
    </a>
    <a href="https://github.com/zitrocode/touch-win/issues">
      <img alt="GitHub issues" src="https://img.shields.io/github/issues/zitrocode/touch-win?color=yellow&style=flat-square">
    </a>
    <a href="https://github.com/zitrocode/touch-win/blob/master/LICENSE">
      <img alt="GitHub license" src="https://img.shields.io/github/license/zitrocode/touch-win?style=flat-square">
    </a>
    <a href="https://www.linkedin.com/in/zitrocode">
      <img alt="npm" src="https://img.shields.io/npm/v/touch-win?style=flat-square">
    </a>
  </div>
  <br>
  <div align="center">
    <a href="https://github.com/zitrocode/touch-win/issues">
     <strong>Report Bug</strong>
    </a>
    ·
    <a href="https://github.com/zitrocode/touch-win/issues">
     <strong>Request Feature</strong>
    </a>
  </div>
</div>

---

> If you think touch-win is a support for you, please consider making a small donation so that I can continue to allocate time to do more projects like this. <a href="https://github.com/sponsors/zitrocode"><strong>GitHub Sponsor</strong></a>.

<div align="center">
  <a href="https://ko-fi.com/M4M8C5NAP"><img src="https://ko-fi.com/img/githubbutton_sm.svg"></a>
</div>

<br>
<div align="center">
  <img src="./images/Touch Win.png" width="90%" style="border-radius: 10px;">
</div>
<br>

**[Touch Win](https://github.com/zitrocode/touch-win)** is a cli program that helps you create various files with a single command, it is inspired by the "touch" command found natively in Linux and Unix based operating systems. Even though there are several programs/packages in [npmjs](https://www.npmjs.com/package/touch-win) that help you get this command on Windows, **I assure you that there is no one like it**.

🧠 **Don't forget** to give a ⭐ if you like this project!

## ✨ Features

- It allows you to generate multiple files with a single command.
- Create folders automatically if they don't exist.
- Allows you to generate files from a base path.
- Allows you to generate files from a template.

## 📦 Installation

Install touch-win with your package manager:

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
      --version   Show version number                                                               [boolean]
  -h, --help      Show help                                                                         [boolean]
  -v, --verbose   Run with verbose logging                                         [boolean] [default: false]
  -b, --base      Base folder to place the file(s)                                                   [string]
  -t, --template  Template to generate files                                                         [string]
Examples:
  touch-win [options] [file ...]                                                   Create file(s)

  touch-win src/bin/cli.js src/helpers/file.js src/helpers/directory.js            Standard use
```

As you have seen, **Touch Win** has some options that will help you create a new file:

#### 👨‍💻 With Base Option:

Forget to write the same path for the files you want to create with this option you can do it.

```bash
touch-win --base src/helpers/ alerts.js directory.js file.js
```

#### 👨‍💻 With Template Option:

It has a similarity with the "Base" option, the difference arises when you only need small changes in the names or paths of the files.

```bash
touch-win --template config/webpack.[rn].js common dev build
```

**Note:** It's important to put `[rn]` where you want it to be replaced by the arguments.

<details>
  <summary>More examples with "template"</summary>
  <br>
  <p><strong>Change extensions:</strong></p>
  <code>
    touch-win -t src/components/my_component.[rn] js css
  </code>
  <br>
  <p><strong>Rename the file:</strong></p>
  <code>
    touch-win -t src/helpers/[rn].js alerts directory file
  </code>
</details>

## 📝 License

This project is **[MIT](./LICENSE)** licensed.

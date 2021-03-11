# Joffrey

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/joffrey)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/joffrey.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/joffrey)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/joffrey)](https://github.com/davidsaulrodriguez/joffrey)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/joffrey)](https://github.com/davidsaulrodriguez/joffrey/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/joffrey)](https://github.com/davidsaulrodriguez/joffrey/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/joffrey)](https://github.com/davidsaulrodriguez/joffrey/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/joffrey)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_joffrey&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_joffrey)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_joffrey&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_joffrey)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_joffrey&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_joffrey)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_joffrey&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_joffrey)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/joffrey/latest/main)

</span>

Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Dependencies](#dependdencies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**Joffrey** is a simple budget app that helps you to keep track of your expenses both on and offline.

This application was created based off of starter code given for the homework unit #18 in addition to my [NodeJS Repo Template][noderepotemp] project.

## Screenshots

**Coming Soon**

## Dependencies

**Project Dependencies**

- "compression": "^1.7.4",
- "express": "^4.17.1",
- "lite-server": "^2.6.1",
- "mongoose": "^5.12.0",
- "morgan": "^1.10.0"

**Development Dependencies**

- "eslint": "^7.21.0",
- "nodemon": "^2.0.7",
- "prettier": "^2.2.1"

## Installation

**Installation Requirements**

You will need [NodeJS][nodejs] installed for use with this project.

You will also need the latest version of [MongoDB][mongodb] installed locally on your machine.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/joffrey.git
cd joffrey/
```

**Install**

Now install the required dependencies with npm.

```shell
npm install
```

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

## Usage

To start **Joffrey** simply run:

```shell
npm run start
```

## Development

While working and developing on the source code, you can run a live development server with:

```shell
npm run watch
```

**Offline testing**

You can test the application offline by running:

```shell
npm run offline
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project is an ephemeral homework assignment and will not be worked on past its release (due date). Hence the week-long support life cycle.

| Release | Status             | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life |
| ------- | ------------------ | --------------- | ---------------- | --------------------- | ----------- |
| develop | Unstable           | -               | -                | -                     | -           |
| v1      | :heavy_check_mark: | 2021-03-16      | -                | -                     | 2021-03-23  |

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/joffrey/archive/main.zip
[mongodb]: https://www.mongodb.com/try/download/community
[nodejs]: https://nodejs.com
[support]: ./SLC.md
[contrib]: ./CONTRIBUTING.md
[branching]: ./docs/Branching_Model.md
[issues]: https://github.com/davidsaulrodriguez/joffrey/issues/new/choose
[license]: ./LICENSE
[noderepotemp]: https://github.com/davidsaulrodriguez/nodejs-repo-template

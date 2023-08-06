# Shuffle Array (NodeJS)

[![License](https://img.shields.io/badge/License-MIT-808080?style=flat-square "License")](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/shuffle-array-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/shuffle-array-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/shuffle-array-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/shuffle-array-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/shuffle-array-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/shuffle-array) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/shuffle-array?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/shuffle-array/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/shuffle-array/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to shuffle the array's indexes.

> **🔗 Other Edition:**
>
> - [Deno](https://github.com/hugoalh-studio/shuffle-array-deno)

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/shuffle-array
```

```js
import shuffleArray from "@hugoalh/shuffle-array";// Default Import
```

### API

#### Function

```ts
shuffleArray<T>(item: T[]): T[];
```

### Example

- ```js
  let chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];
  
  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]
  
  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```

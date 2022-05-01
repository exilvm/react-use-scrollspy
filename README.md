# react-use-scrollspy

[![Build Status](https://travis-ci.org/Purii/react-use-scrollspy.svg?branch=master)](https://travis-ci.org/Purii/react-use-scrollspy)
[![npm version](http://img.shields.io/npm/v/react-use-scrollspy.svg?style=flat)](https://www.npmjs.com/package/react-use-scrollspy)
[![npm](https://img.shields.io/npm/dm/react-use-scrollspy.svg)](https://www.npmjs.com/package/react-use-scrollspy)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Purii/react-use-scrollspy/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-Patreon-green.svg)](https://www.patreon.com/purii)

![Example](example.gif)

## Installation

`react-use-scrollspy` is a React `Hook` which requires React **16.8.0 or later.**

```sh
// yarn
yarn add react-use-scrollspy
// or npm
npm i react-use-scrollspy --S
```

## Usage

```javascript
import useScrollSpy from 'react-use-scrollspy';
...
const activeSection = useScrollSpy({
  sectionElementRefs: [], // Array of References to DOM elements
});
```

| Parameter          | Default |  Type   | Description                                      |
| :----------------- | :-----: | :-----: | ------------------------------------------------ |
| defaultValue       |   `0`   |  `int`  | Default value that is returned (optional)        |
| offsetPx           |   `0`   |  `int`  | Set offset (optional)                            |
| sectionElementRefs |  `[]`   | `[Ref]` | Array of Refs to observe (e.g. via React `refs`) |

### with Refs

Use React `refs` for section elements like in the [provided example](/example).

## Fire up the demo and develop
Install dependencies and build a tgz file for the demo to use as a local package:
```
npm i && npm run build && npm pack
```
Move the package file to the `bin` directory:
```
mkdir -p ./example/bin && mv *.tgz ./example/bin
```
install the demo dependencies:
```
cd example && npm i
```
Start the demo:
```
npm start
```



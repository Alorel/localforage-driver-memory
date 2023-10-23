# localforage-driver-memory

In-memory localforage driver that forgets all data on page reload.

[![MASTER CI status](https://github.com/Alorel/localforage-driver-memory/actions/workflows/core.yml/badge.svg)](https://github.com/Alorel/localforage-driver-memory/actions/workflows/core.yml?query=branch%3Amaster)
[![NpmVersion](https://img.shields.io/npm/v/localforage-driver-memory.svg)](https://www.npmjs.com/package/localforage-driver-memory)
[![Coveralls github branch](https://img.shields.io/coveralls/github/Alorel/localforage-driver-memory/1.0.5.svg?style=flat-square)](https://coveralls.io/github/Alorel/localforage-driver-memory)
[![dependencies badge](https://img.shields.io/librariesio/release/npm/localforage-driver-memory)](https://libraries.io/npm/localforage-driver-memory)

---

# Installation

```shell
npm install localforage-driver-memory localforage
```

# Usage

```javascript
import * as localforage from 'localforage';
import memoryDriver from 'localforage-driver-memory';

localforage.defineDriver(memoryDriver);
localforage.setDriver(memoryDriver._driver);
```

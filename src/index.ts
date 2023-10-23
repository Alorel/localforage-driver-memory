/// <reference types="localforage" />

import {clear} from './clear';
import {dropInstance} from './dropInstance';
import {getItem} from './getItem';
import {initStorage} from './initStorage';
import {iterate} from './iterate';
import {key} from './key';
import {keys} from './keys';
import {length} from './length';
import {removeItem} from './removeItem';
import {setItem} from './setItem';

export const DRIVER_NAME = 'localforage-driver-memory';

const driver: LocalForageDriver = {
  _driver: DRIVER_NAME,
  _initStorage: initStorage,
  _support: true,
  clear,
  dropInstance,
  getItem,
  iterate,
  key,
  keys,
  length,
  removeItem,
  setItem
};

export default driver;

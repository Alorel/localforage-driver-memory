/// <reference types="localforage" />

import {getKeyPrefix} from 'localforage-driver-commons';
import serializer from 'localforage-driver-commons/serialiser';
import type {LocalForageExt, LocalForageMemDbInfo} from './config';
import {DB_INFO} from './config';
import {Store} from './Store';

/** @internal */
export function initStorage(this: LocalForage, options?: LocalForageOptions): void {
  const keyPrefix = getKeyPrefix(options || {}, (this as LocalForageExt)._defaultConfig);

  const value: LocalForageMemDbInfo = {
    ...options,
    keyPrefix,
    mStore: new Store(keyPrefix),
    serializer
  };

  Object.defineProperty(this, DB_INFO, {configurable: true, value});
}

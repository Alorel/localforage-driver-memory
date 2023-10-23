/// <reference types="localforage" />

import {type CallbackFn, executeCallback, normaliseKey} from 'localforage-driver-commons';
import {DB_INFO, type LocalForageExt} from './config';

/** @internal */
export function removeItem(this: LocalForage, key: string, callback?: (err?: Error) => void): Promise<void> {
  const normalisedKey = normaliseKey(key);

  const promise = this.ready().then<void>(() => (
    (this as LocalForageExt)[DB_INFO].mStore.rm(normalisedKey)
  ));

  executeCallback(promise, callback as CallbackFn<any>);

  return promise;
}

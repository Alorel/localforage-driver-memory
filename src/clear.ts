/// <reference types="localforage" />

import {executeCallback} from 'localforage-driver-commons';
import type {LocalForageExt} from './config';
import {DB_INFO} from './config';

/** @internal */
export function clear(this: LocalForage, callback?: (err?: Error | null) => void): Promise<void> {
  const promise = this.ready().then(() => {
    (this as LocalForageExt)[DB_INFO].mStore.clear();
  });

  executeCallback(promise, callback);

  return promise;
}

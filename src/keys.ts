/// <reference types="localforage" />

import {type CallbackFn, executeCallback} from 'localforage-driver-commons';
import type {LocalForageExt} from './config';
import {DB_INFO} from './config';

/** @internal */
export function keys(this: LocalForage, callback?: CallbackFn<string[]>): Promise<string[]> {
  const promise = this.ready().then<string[]>(() => (
    [...(this as LocalForageExt)[DB_INFO].mStore.keys()]
  ));

  executeCallback(promise, callback);

  return promise;
}

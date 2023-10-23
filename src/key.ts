/// <reference types="localforage" />

import {type CallbackFn, executeCallback} from 'localforage-driver-commons';
import type {LocalForageExt} from './config';
import {DB_INFO} from './config';

/** @internal */
export function key(this: LocalForage, idx: number, callback?: CallbackFn<string>): Promise<string> {
  const promise = this.ready().then<string | null>(() => (
    (this as LocalForageExt)[DB_INFO].mStore.key(idx) ?? null
  ));

  executeCallback(promise as Promise<string>, callback);

  return promise as Promise<string>;
}

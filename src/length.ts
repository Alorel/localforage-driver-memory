/// <reference types="localforage" />

import {type CallbackFn, executeCallback} from 'localforage-driver-commons';
import {DB_INFO, type LocalForageExt} from './config';

/** @internal */
export function length(this: LocalForage, callback?: CallbackFn<number>): Promise<number> {
  const p = this.ready().then(() => (this as LocalForageExt)[DB_INFO].mStore.len);

  executeCallback(p, callback);

  return p;
}

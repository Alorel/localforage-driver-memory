/// <reference types="localforage" />

import {type CallbackFn, executeCallback, normaliseKey} from 'localforage-driver-commons';
import {DB_INFO, type LocalForageExt} from './config';

/** @internal */
export function getItem<T>(this: LocalForage, key: string, callback?: CallbackFn<T | null>): Promise<T | null> {
  const normalisedKey = normaliseKey(key);

  const promise = this.ready().then<T | null>(() => {
    const result = ((this as LocalForageExt)[DB_INFO].mStore).get<string>(normalisedKey);

    // Deserialise if the result is not null or undefined
    return result === undefined
      ? null
      : (this as LocalForageExt)[DB_INFO].serializer.deserialize(result) as T;
  });

  executeCallback(promise, callback);

  return promise;
}

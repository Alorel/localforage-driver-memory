/// <reference types="localforage" />

import {type CallbackFn, executeCallback, normaliseKey} from 'localforage-driver-commons';
import {DB_INFO, type LocalForageExt} from './config';

/** @internal */
export function setItem<T>(this: LocalForage, key: string, value: T, callback?: CallbackFn<T>): Promise<T> {
  const normalisedKey = normaliseKey(key);
  const normalisedValue = value === undefined ? null : value;

  const promise = this.ready().then<T>(() => (
    new Promise<T>((resolve, reject) => {
      const dbi = (this as LocalForageExt)[DB_INFO];
      dbi.serializer.serialize(normalisedValue, (serialisedValue, error) => {
        if (error) {
          reject(error);
        } else {
          try {
            dbi.mStore.set(normalisedKey, serialisedValue);
            resolve(value);
          } catch (e) {
            reject(e);
          }
        }
      });
    })
  ));

  executeCallback(promise, callback);

  return promise;
}

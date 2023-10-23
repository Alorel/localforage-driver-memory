/// <reference types="localforage" />

import {type CallbackFn, executeCallback} from 'localforage-driver-commons';
import {DB_INFO, type LocalForageExt} from './config';

/** @internal */
export function iterate<T, U>(
  this: LocalForage,
  iteratee: (value: T, key: string, iterationNumber: number) => U,
  callback?: CallbackFn<U>
): Promise<U> {
  const promise = this.ready().then<U | null>(() => {
    const {
      mStore,
      serializer: {deserialize}
    } = (this as LocalForageExt)[DB_INFO];

    for (const [i, key, value] of mStore) {
      /*
       * If a result was found, parse it from the serialized string into a JS object. If result isn't truthy, the
       * key is likely undefined and we'll pass it straight to the iterator.
       */
      const valueFmt = value ? deserialize(value) : value;
      const postIter = iteratee(valueFmt, key, i);

      if (postIter !== undefined) {
        return postIter;
      }
    }

    return null;
  });

  executeCallback(promise as Promise<U>, callback);

  return promise as Promise<U>;
}

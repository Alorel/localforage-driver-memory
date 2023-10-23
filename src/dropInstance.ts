/// <reference types="localforage" />

import {type CallbackFn, dropInstanceCommon, executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

/** @internal */
export async function dropInstance(this: LocalForage, ...args: Parameters<LocalForageDropInstanceFn>): Promise<void> {
  const {promise, callback} = dropInstanceCommon.apply(this, args);

  const outPromise = promise.then<void>(keyPrefix => {
    new Store(keyPrefix).drop();
  });

  executeCallback(outPromise, callback as CallbackFn<any>);

  await promise;
}

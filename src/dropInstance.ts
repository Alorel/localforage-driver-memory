import {dropInstanceCommon, executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

export function dropInstance(this: any, _options: any, _cb?: any) {
  const {promise, callback} = dropInstanceCommon.apply(this, <any>arguments);

  const outPromise = promise.then<void>(keyPrefix => {
    Store.resolve(keyPrefix).drop();
  });

  executeCallback(outPromise, callback);

  return promise;
}

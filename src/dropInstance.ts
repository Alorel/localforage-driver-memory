import {dropInstanceCommon, executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Drop the storage instance
 * @param _options Drop options
 * @param _cb Callback to execute when the operation completes
 */
export function dropInstance(this: any, _options: any, _cb?: any) {
  const {promise, callback} = dropInstanceCommon.apply(this, <any>arguments);

  const outPromise = promise.then<void>(keyPrefix => {
    Store.resolve(keyPrefix).drop();
  });

  executeCallback(outPromise, callback);

  return promise;
}

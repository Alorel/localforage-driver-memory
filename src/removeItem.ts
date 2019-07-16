import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Remove item from storage
 * @param key$ Item key
 * @param callback Callback for when the operation completes
 */
export function removeItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    (<Store>this._dbInfo.mStore).rm(key$);
  });

  executeCallback(promise, callback);

  return promise;
}

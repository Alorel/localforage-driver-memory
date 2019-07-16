import {executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Clear all items from storage
 * @param callback Callback for when the operation completes
 */
export function clear(this: any, callback?: (err: any) => void): Promise<void> {
  const promise = this.ready().then(() => {
    (<Store>this._dbInfo.mStore).clear();
  });

  executeCallback(promise, callback);

  return promise;
}

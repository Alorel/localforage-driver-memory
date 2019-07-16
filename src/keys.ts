import {executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * List keys in storage
 * @param callback Callback for when the operation completes
 */
export function keys(this: any, callback?: any) {
  const promise = this.ready().then(() => {
    return (<Store>this._dbInfo.mStore).keys();
  });

  executeCallback(promise, callback);

  return promise;
}

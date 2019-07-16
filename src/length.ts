import {executeCallback} from 'localforage-driver-commons';

/**
 * Return the number of items in storage
 * @param callback Callback for when the operation completes
 */
export function length(this: any, callback?: any) {
  const promise = this.keys().then((keys$: any[]) => keys$.length);

  executeCallback(promise, callback);

  return promise;
}

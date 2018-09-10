import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

export function removeItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    (<Store>this._dbInfo.mStore).rm(key$);
  });

  executeCallback(promise, callback);

  return promise;
}

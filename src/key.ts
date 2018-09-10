import {executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

export function key(this: any, idx: number, callback?: any) {
  const promise = this.ready().then(() => {
    let result: any;
    try {
      result = (<Store>this._dbInfo.mStore).key(idx);
    } catch {
      result = null;
    }

    return result;
  });

  executeCallback(promise, callback);

  return promise;
}

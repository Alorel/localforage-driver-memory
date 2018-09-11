import {executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

export function keys(this: any, callback?: any) {
  const promise = this.ready().then(() => {
    return (<Store>this._dbInfo.mStore).keys();
  });

  executeCallback(promise, callback);

  return promise;
}

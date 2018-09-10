import {executeCallback} from 'localforage-driver-commons';

export function length(this: any, callback?: any) {
  const promise = this.keys().then((keys$: any[]) => keys$.length);

  executeCallback(promise, callback);

  return promise;
}

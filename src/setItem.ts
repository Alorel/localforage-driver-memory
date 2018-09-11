import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

export function setItem(this: any, key$: string, value: any, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    if (value === undefined) {
      value = null;
    }

    // Save the original value to pass to the callback.
    const originalValue = value;

    return new Promise<any>((resolve, reject) => {
      this._dbInfo.serializer.serialize(value, (value$: string, error: Error) => {
        if (error) {
          reject(error);
        } else {
          try {
            (<Store>this._dbInfo.mStore).set(key$, value$);
            resolve(originalValue);
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  });

  executeCallback(promise, callback);

  return promise;
}

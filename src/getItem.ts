import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

export function getItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    let result = (<Store>this._dbInfo.mStore).get(key$);

    // If a result was found, parse it from the serialized
    // string into a JS object. If result isn't truthy, the key
    // is likely undefined and we'll pass it straight to the
    // callback.
    if (result) {
      result = this._dbInfo.serializer.deserialize(result);
    }

    return result;
  });

  executeCallback(promise, callback);

  return promise;
}

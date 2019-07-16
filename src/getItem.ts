import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Get item from storage
 * @param key$ Item key
 * @param callback Callback for when the operation completes
 */
export function getItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    const result = (<Store>this._dbInfo.mStore).get(key$);

    // Deserialise if the result is not null or undefined
    return result == null ? null : this._dbInfo.serializer.deserialize(result); //tslint:disable-line:triple-equals
  });

  executeCallback(promise, callback);

  return promise;
}

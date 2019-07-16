import {clone, getKeyPrefix, LocalForageOptions, serialiser} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Initialiser function for this storage engine
 * @param options Initialisation config
 */
export function _initStorage(this: any, options?: LocalForageOptions): any {
  const opts = options ? clone(options) : {};
  const kp = getKeyPrefix(opts, this._defaultConfig);
  const store = Store.resolve(kp);

  this._dbInfo = opts;
  this._dbInfo.serializer = serialiser;
  this._dbInfo.keyPrefix = kp;
  this._dbInfo.mStore = store;

  return Promise.resolve();
}

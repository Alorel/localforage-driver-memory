/// <reference types="localforage" />

import type {LocalForageExt as LocalForageExtBase} from 'localforage-driver-commons';
import type {TStore} from './Store';

/** @internal */
export const DB_INFO = Symbol('DB info');

/** @internal */
export interface LocalForageExt extends LocalForageExtBase {
  [DB_INFO]: LocalForageMemDbInfo;
}

/** @internal */
export interface LocalForageMemDbInfo extends LocalForageOptions {
  mStore: TStore;
  keyPrefix: string;
  serializer: LocalForageSerializer;
}

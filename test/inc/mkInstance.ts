import {v4 as uuid} from 'uuid';
import {_driver} from '../../src';
import './defineDriver';
import {lf} from './localforage';

export function mkInstance(): any {
  return lf.createInstance({
    driver: _driver,
    name: uuid(),
    storeName: uuid()
  });
}

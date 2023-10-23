import {randomUUID} from 'crypto';
import * as localForage from 'localforage';
import driver, {DRIVER_NAME} from '../../src';
import {LocalForageExt} from '../../src/config';

const p$ = localForage.defineDriver(driver)
  .then(() => localForage.setDriver(driver._driver));

export {p$ as DEFINE_DRIVER_PROMISE};

export async function mkInstance(): Promise<LocalForageExt> {
  await p$;
  
  return localForage.createInstance({
    driver: DRIVER_NAME,
    name: randomUUID(),
    storeName: randomUUID()
  }) as LocalForageExt;
}

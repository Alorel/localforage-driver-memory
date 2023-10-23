import {expect} from 'chai';
import {createInstance} from 'localforage';
import {DRIVER_NAME} from '../src/index';
import {DEFINE_DRIVER_PROMISE} from './inc/mkInstance';

describe('dropInstance', async () => {
  before(() => DEFINE_DRIVER_PROMISE);

  it('Should not reuse data', async () => {
    const d1 = createInstance({driver: DRIVER_NAME});
    await d1.setItem('foo', 'bar');
    await d1.dropInstance();
    
    const d2 = createInstance({driver: DRIVER_NAME});
    expect(await d2.length()).to.eq(0);
  });
});

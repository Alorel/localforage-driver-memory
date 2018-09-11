import {expect} from 'chai';
import './inc/defineDriver';
import {mkInstance} from './inc/mkInstance';

describe('dropInstance', () => {
  const d1 = mkInstance();
  let data: any;

  before('initDrivers', () => d1.setItem('foo', 'bar'));
  before('snapshot data', () => {
    data = d1._dbInfo.mStore.data;
  });

  it('data objects should be different', async () => {
    await d1.dropInstance();
    expect(data === d1._dbInfo.mStore.data).to.be.false;
  });
});

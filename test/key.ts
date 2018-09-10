import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('key', () => {
  let d1: any;
  let d2: any;

  before('init', () => {
    d1 = mkInstance();
    d2 = mkInstance();
  });

  before('set', () => {
    return Promise.all([
      d1.setItem('foo', 1),
      d1.setItem('bar', 2),
      d2.setItem('qux', 3),
      d2.setItem('baz', 4)
    ]);
  });

  it('d1 k0 should be foo', async () => {
    expect(await d1.key(0)).to.eq('foo');
  });

  it('d1 k1 should be foo', async () => {
    expect(await d1.key(1)).to.eq('bar');
  });

  it('d2 k0 should be qux', async () => {
    expect(await d2.key(0)).to.eq('qux');
  });

  it('d2 k1 should be baz', async () => {
    expect(await d2.key(1)).to.eq('baz');
  });

  it('k2 should be null', async () => {
    expect(await d1.key(2)).to.be.null;
  });
});

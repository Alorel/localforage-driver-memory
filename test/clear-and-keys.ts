import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('clear & keys', () => {
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
      d2.setItem('qux', 1),
      d2.setItem('baz', 2)
    ]);
  });

  before('clear', () => d1.clear());

  it('d1 should be empty', async () => {
    expect(await d1.keys()).to.be.empty;
  });

  it('d2 should be qux/baz', async () => {
    expect(await d2.keys()).to.deep.eq(['qux', 'baz']);
  });
});

import {expect} from 'chai';
import type {LocalForageExt} from '../src/config';
import {mkInstance} from './inc/mkInstance';

describe('clear & keys', () => {
  let d1: LocalForageExt;
  let d2: LocalForageExt;

  before('init, set & clear', async () => {
    [d1, d2] = await Promise.all([mkInstance(), mkInstance()]);

    await Promise.all([
      d1.setItem('foo', 1),
      d1.setItem('bar', 2),
      d2.setItem('qux', 1),
      d2.setItem('baz', 2)
    ]);

    await d1.clear();
  });

  it('d1 should be empty', async () => {
    expect(await d1.keys()).to.have.a.lengthOf(0);
  });

  it('d2 should be qux/baz', async () => {
    expect(await d2.keys()).to.deep.eq(['qux', 'baz']);
  });
});

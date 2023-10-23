import {expect} from 'chai';
import type {LocalForageExt} from '../src/config';
import {mkInstance} from './inc/mkInstance';

describe('removeItem', () => {
  let d: LocalForageExt;

  before('init', async () => {
    d = await mkInstance();
    await d.setItem('foo', 1);
  });

  it('foo should be 1 initially', async () => {
    expect(await d.getItem('foo')).to.eq(1);
  });

  it('foo should be undefined after deleting', async () => {
    await d.removeItem('foo');
    expect(await d.getItem('foo')).to.eq(null);
  });
});

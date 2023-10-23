import {expect} from 'chai';
import {LocalForageExt} from '../src/config';
import {mkInstance} from './inc/mkInstance';

describe('setItem & getItem', () => {
  let d1: LocalForageExt;
  let d2: LocalForageExt;

  before('init', async () => {
    [d1, d2] = await Promise.all([mkInstance(), mkInstance()]);

    await Promise.all([
      d1.setItem('foo', {foo: 'bar'}),
      d2.setItem('bar', {qux: 'baz'})
    ]);
  });

  it('d1 should have foo', async () => {
    expect(await d1.getItem('foo')).to.deep.eq({foo: 'bar'});
  });

  it('d2 should have bar', async () => {
    expect(await d2.getItem('bar')).to.deep.eq({qux: 'baz'});
  });

  it('d1 should not have bar', async () => {
    expect(await d1.getItem('bar')).to.eq(null);
  });

  it('d2 should not have foo', async () => {
    expect(await d2.getItem('foo')).to.eq(null);
  });

  it('Setting undefined should set null', async () => {
    await d1.setItem('qux', undefined);
    expect(await d1.getItem('qux')).to.eq(null);
  });
});

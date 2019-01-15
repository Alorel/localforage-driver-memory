import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('setItem & getItem', () => {
  let d1: any;
  let d2: any;

  before('init', () => {
    d1 = mkInstance();
    d2 = mkInstance();
  });

  before('set', () => {
    return Promise.all([
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
    expect(await d1.getItem('bar')).to.be.null;
  });

  it('d2 should not have foo', async () => {
    expect(await d2.getItem('foo')).to.be.null;
  });

  it('Setting undefined should set null', async () => {
    await d1.setItem('qux', undefined);
    expect(await d1.getItem('qux')).to.be.null;
  });
});

import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('removeItem', () => {
  let d: any;

  before('init', async () => {
    d = mkInstance();
    await d.setItem('foo', 1);
  });

  it('foo should be 1 initially', async () => {
    expect(await d.getItem('foo')).to.eq(1);
  });

  it('foo should be undefined after deleting', async () => {
    await d.removeItem('foo');
    expect(await d.getItem('foo')).to.be.null;
  });
});

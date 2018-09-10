import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('length', () => {
  let d: any;

  describe('Before setting anything', () => {
    before('init', () => {
      d = mkInstance();
    });

    it('length should be 0', async () => {
      expect(await d.length()).to.eq(0);
    });
  });

  describe('after setting keys', () => {
    before('init', () => {
      d = mkInstance();
    });

    before('set some keys', () => {
      const p: any[] = [];

      for (let i = 0; i < 20; i++) {
        p.push(d.setItem(`k${i}`, i));
      }

      return Promise.all(p);
    });

    it('length should be 20', async () => {
      expect(await d.length()).to.eq(20);
    });
  });
});

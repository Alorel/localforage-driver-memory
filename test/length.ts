import {expect} from 'chai';
import type {LocalForageExt} from '../src/config';
import {mkInstance} from './inc/mkInstance';

describe('length', () => {
  let d: LocalForageExt;

  describe('Before setting anything', () => {
    before('init', async () => (d = await mkInstance()));

    it('length should be 0', async () => {
      expect(await d.length()).to.eq(0);
    });
  });

  describe('after setting keys', () => {
    before('init', async () => {
      d = await mkInstance();

      const NUM = 20;
      const p: Promise<any>[] = Array(NUM);

      for (let i = 0; i < NUM; i++) {
        p[i] = d.setItem(`k${i}`, i);
      }

      await Promise.all(p);
    });

    it('length should be 20', async () => {
      expect(await d.length()).to.eq(20);
    });
  });
});

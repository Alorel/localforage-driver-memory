import {expect} from 'chai';
import type {LocalForageExt} from '../src/config';
import {mkInstance} from './inc/mkInstance';

describe('iterate', () => {
  let d1: LocalForageExt;
  let d2: LocalForageExt;
  
  let itRes1: Record<string, any>;
  let itRes2: Record<string, any>;
  let itRsp1: any;
  let itRsp2: any;

  before('init', async () => {
    [d1, d2] = await Promise.all([mkInstance(), mkInstance()]);

    await Promise.all([
      d1.setItem('foo', 1),
      d1.setItem('bar', 2),
      d2.setItem('qux', 3),
      d2.setItem('baz', 4)
    ]);
    
    itRes1 = {};
    itRes2 = {};
    
    await Promise.all([
      d1.iterate((v: any, k: string, num: number) => {
          itRes1[k] = v;

          if (num === 2) {
            return 'iterated';
          }
        })
        .then((r: any) => {
          itRsp1 = r;
        }),
      d2.iterate((v: any, k: string) => {
          itRes2[k] = v;
        })
        .then((r: any) => {
          itRsp2 = r;
        })
    ]);
  });

  it('itRsp1 should be "iterated"', () => {
    expect(itRsp1).to.eq('iterated');
  });

  it('itRsp2 should be undefined', () => {
    expect(itRsp2).to.eq(null);
  });

  it('itRes1 should have foo, bar', () => {
    expect(itRes1).to.deep.eq({foo: 1, bar: 2});
  });

  it('itRes2 should have qux, baz', () => {
    expect(itRes2).to.deep.eq({qux: 3, baz: 4});
  });
});

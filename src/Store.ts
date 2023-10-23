/// <reference types="localforage" />

const storeMap = new Map<string, Store>();

interface DataRef {
  data: any;

  idx: number;

  key: string;
}

/** @internal */
class Store {

  private array: DataRef[] = [];

  private readonly map = new Map<string, DataRef>();

  public constructor(private readonly kp: string) {
    // just assign the `kp`
  }

  public get len(): number {
    return this.array.length;
  }

  *[Symbol.iterator](): Generator<[number, string, any], void> {
    for (const [i, {key, data}] of this.array.entries()) {
      yield [i + 1, key, data];
    }
  }

  public clear(): void {
    this.map.clear();
    this.array = [];
  }

  public drop(): void {
    this.clear();
    storeMap.delete(this.kp);
  }

  public get<T>(key: string): T | undefined {
    return this.map.get(key)?.data;
  }

  public key(idx: number): string | undefined {
    return this.array[idx]?.key;
  }

  public *keys(): Generator<string, void> {
    for (const {key} of this.array) {
      yield key;
    }
  }

  public rm(k: string): void {
    const data = this.map.get(k);
    if (data) {
      this.map.delete(k);
      this.array.splice(data.idx, 1);
    }
  }

  public set<V>(k: string, v: V): void {
    const dRef: DataRef = {
      data: v,
      idx: this.array.length,
      key: k
    };
    this.map.set(k, dRef);
    this.array.push(dRef);
  }
}

const proxy = new Proxy(Store, {
  construct(_: typeof Store, [keyPrefix]: [string]): Store {
    const existing = storeMap.get(keyPrefix);
    if (existing) {
      return existing;
    }

    const nu = new Store(keyPrefix);
    storeMap.set(keyPrefix, nu);

    return nu;
  }
});

/** @internal */
export {proxy as Store};

/** @internal */
export type {Store as TStore};

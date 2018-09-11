const stores: { [store: string]: Store } = {};

/** @internal */
export class Store {

  private data: { [k: string]: any } = {};

  private constructor(private readonly kp: string) {
  }

  public static resolve(kp: string): Store {
    if (!stores[kp]) {
      stores[kp] = new Store(kp);
    }

    return stores[kp];
  }

  public clear(): void {
    this.data = {};
  }

  public drop(): void {
    this.clear();
    delete stores[this.kp];
  }

  public get(key: string): any {
    return this.data[key];
  }

  public key(idx: number): string {
    return this.keys()[idx];
  }

  public keys(): string[] {
    return Object.keys(this.data);
  }

  public rm(k: string): void {
    delete this.data[k];
  }

  public set(k: string, v: any): void {
    this.data[k] = v;
  }
}

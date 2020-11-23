export interface Dictionary<T> {
  readonly size: number;
  clear(): void;
  delete(key: string | number): boolean;
  get(key: string | number): T | undefined;
  has(key: string | number): boolean;
  set(key: string | number, value: T): this;
}

export class Dictionary<T> {
  // Dictionary key will always be set as a string.
  private table: { [key: string]: T } = {};

  readonly size: number = 0;

  clear() {
    this.table = {};
  }

  delete(key: string | number) {
    delete this.table[key.toString()];
    return true;
  }

  get(key: string | number) {
    return this.table[key.toString()];
  }

  has(key: string | number) {
    return this.table[key.toString()] !== undefined;
  }

  set(key: string | number, value: T) {
    this.table[key.toString()] = value;

    return this;
  }
}

const dictionary = new Dictionary<number | string>();

dictionary.set(1, 1);
dictionary.set("foo", "bar");

console.log(dictionary.set(1, 1).get(1));
// console.log(JSON.stringify(dictionary));

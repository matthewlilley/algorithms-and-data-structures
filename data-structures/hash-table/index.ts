import { LinkedList } from "../linked-list/index.ts";
import { djb2 } from "../../algorithms/hash/djb2";

export class HashTable<T> {
  n: number;
  hash: (string: string) => number;
  buckets: LinkedList<T>[];
  constructor(n: number, hash = djb2) {
    this.n = n;
    this.hash = hash;
    this.buckets = new Array(this.n)
      .fill(undefined)
      .map(() => new LinkedList());
  }
  set(key: string, value: T) {
    this.buckets[this.hash(key) % this.n].addTail(value);
  }
  get(key: string) {
    return this.buckets[this.hash(key) % this.n];
  }
}

const decoder = new TextDecoder("utf-8");
// Dictionary used taken from
// wget https://cdn.cs50.net/2019/fall/psets/5/speller/speller.zip
const data = await Deno.readFile("./dictionary");
const lines = decoder.decode(data).split("\n");
const hashTable = new HashTable<string>(lines.length);

// Load a dictionary
for (const line of decoder.decode(data).split("\n")) {
  hashTable.set(line, line);
}

console.log(hashTable.get("hello"));

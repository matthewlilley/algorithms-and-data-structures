export interface Queue<T> {
  items: T[];
  maximum: number;
  head: number;
  tail: number;
  peek(): T;
  enqueue(item: T): void;
  dequeue(): void;
}

export class Queue<T> implements Queue<T> {
  items: T[];
  maximum: number;
  head: number;
  tail: number;
  size: number;
  constructor(size: number = Math.pow(2, 32)) {
    this.items = new Array(size - 1);
    this.maximum = size;
    this.head = 0;
    this.tail = -1;
    this.size = 0;
  }

  peek(): T {
    return this.items[this.head];
  }

  enqueue(item: T) {
    if (this.size === this.maximum) {
      throw Error("Overflow error");
    }

    this.tail = (this.tail + 1) % this.maximum;

    console.log(`Enqueuing #${this.tail}`);

    this.items[this.tail] = item;

    console.log(`Tail #${this.tail}`);

    this.size++;
  }

  dequeue() {
    if (!this.size) {
      throw Error("Underflow error");
    }

    console.log(`Dequeuing #${this.head}`);

    // Circular
    this.head = (this.head + 1) % this.maximum;

    console.log(`Head #${this.head}`);

    this.size--;
  }
}

// const n = 64;

// const queue = new Queue<number>(n);

// for (let i = 0; i < n; i++) {
//   queue.enqueue(i);
// }

// for (let i = 0; i < n / 2; i++) {
//   queue.dequeue();
// }

// console.log(queue);

// // 32
// console.log(queue.peek());

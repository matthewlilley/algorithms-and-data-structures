// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

export interface Stack<T> {
  items: T[];
  maximum: number;
  top: number;
  peek(): T;
  push(item: T): void;
  pop(): T;
}

export class Stack<T> implements Stack<T> {
  items: T[];
  maximum: number;
  constructor(maximum: number = Math.pow(2, 32) - 1) {
    this.items = new Array(maximum);
    this.maximum = maximum;
    this.top = 0;
  }
  peek() {
    return this.items[this.top - 1];
  }
  push(item: T) {
    if (this.top === this.maximum) {
      throw Error("Overflow error");
    }

    this.items[this.top++] = item;
  }
  pop() {
    if (this.top === 0) {
      throw Error("Underflow error");
    }

    this.top--;

    const removed = this.items[this.top];

    delete this.items[this.top];

    return removed;
  }
}

// const stack = new Stack<number>(64);

// for (let i = 0; i < stack.maximum; i++) {
//   stack.push(i);
// }

// // 63
// console.log(stack.peek());

// // 64
// console.log(stack.top);

// // 63
// stack.pop();
// console.log(stack.top);

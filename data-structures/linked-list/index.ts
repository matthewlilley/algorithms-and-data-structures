export interface LinkedListNode<T> {
  next?: LinkedListNode<T>;
  value: T;
}

export class LinkedListNode<T> implements LinkedListNode<T> {
  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next;
  }
}

export interface LinkedList<T> {
  head?: LinkedListNode<T>;
  length: number;
}

export class LinkedList<T> implements LinkedList<T> {
  head?: LinkedListNode<T>;
  length = 0;

  clear() {
    this.head = undefined;
    this.length = 0;
  }

  contains(value: T) {
    for (let tmp = this.head; tmp !== undefined; tmp = tmp?.next) {
      if (tmp.value === value) {
        return true;
      }
    }
  }

  find(value: T): LinkedListNode<T> | undefined {
    for (let tmp = this.head; tmp !== undefined; tmp = tmp?.next) {
      if (tmp.value === value) {
        return tmp;
      }
    }
  }

  findLast(value: T): LinkedListNode<T> | undefined {
    let last;
    for (let tmp = this.head; tmp !== undefined; tmp = tmp?.next) {
      if (tmp.value === value) {
        last = tmp;
      }
    }
    return last;
  }

  addHead(value: T) {
    const node = new LinkedListNode(value, this.head);

    this.head = node;

    this.length++;

    return this.head;
  }

  addTail(value: T) {
    if (!this.head) {
      return this.addHead(value);
    }

    const node = new LinkedListNode(value);
    for (let tmp = this.head; tmp !== undefined; tmp = tmp.next) {
      if (!tmp.next) {
        tmp.next = node;
        break;
      }
    }

    this.length++;

    return node;
  }

  remove(value: T) {
    for (
      let tmp = this.head;
      tmp !== undefined && tmp.next?.value === value;
      tmp = tmp?.next
    ) {
      if (this.length === 1) {
        return this.clear();
      }
      // Set before to after
      tmp.next = tmp.next.next;
    }

    this.length--;
  }

  removeHead() {
    if (this.length === 1) {
      return this.clear();
    }

    this.head = this.head?.next;

    this.length--;
  }

  removeTail() {
    if (this.length === 1) {
      return this.clear();
    }

    let tmp = this.head;

    while (tmp?.next?.next) {
      tmp = tmp.next;
    }

    if (tmp) {
      tmp.next = undefined;
    }

    this.length--;
  }
}

// const list = new LinkedList<number>();

// console.log(list.addHead(1));
// console.log(list.addHead(2));
// console.log(list.addHead(3));

// console.log(list.addTail(1));
// console.log(list.addTail(2));
// console.log(list.addTail(3));

// list.removeHead();
// list.removeHead();
// list.removeHead();

// list.removeLast();
// list.removeTail();
// list.removeTail();

// console.log(list.find(2));

import { LinkedList, LinkedListNode } from "../linked-list/index.ts";

export interface DoublyLinkedListNode<T> extends LinkedListNode<T> {
  previous?: DoublyLinkedListNode<T>;
  next?: DoublyLinkedListNode<T>;
  value: T;
}

export class DoublyLinkedListNode<T> extends LinkedListNode<T>
  implements DoublyLinkedListNode<T> {
  previous?: DoublyLinkedListNode<T>;
  next?: DoublyLinkedListNode<T>;
  constructor(
    value: T,
    next?: DoublyLinkedListNode<T>,
    previous?: DoublyLinkedListNode<T>
  ) {
    super(value, next);
    this.previous = previous;
  }
}

export interface DoublyLinkedList<T> extends LinkedList<T> {
  head?: DoublyLinkedListNode<T>;
  tail?: DoublyLinkedListNode<T>;
  length: number;
}

export class DoublyLinkedList<T> extends LinkedList<T>
  implements DoublyLinkedList<T> {
  head?: DoublyLinkedListNode<T>;
  tail?: DoublyLinkedListNode<T>;
  length = 0;

  clear() {
    console.log("clearing here...");
    super.clear();
    this.tail = undefined;
  }

  addBefore(n1: DoublyLinkedListNode<T>, n2: DoublyLinkedListNode<T>) {
    n2.next = n1;
    if (!n1.previous) {
      this.head = n2;
    } else {
      n2.previous = n1.previous;
      n1.previous.next = n2;
    }
    n1.previous = n2;

    this.length++;

    return n2;
  }

  addAfter(n1: DoublyLinkedListNode<T>, n2: DoublyLinkedListNode<T>) {
    n2.previous = n1;
    if (!n1.next) {
      this.tail = n2;
    } else {
      n2.next = n1.next;
      n1.next.previous = n2;
    }
    n1.next = n2;

    this.length++;

    return n2;
  }

  addHead(value: T) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = this.addBefore(this.head, node);
    }

    return this.head;
  }

  addTail(value: T): DoublyLinkedListNode<T> {
    if (!this.tail) {
      return this.addHead(value);
    }

    const node = new DoublyLinkedListNode(value);

    this.tail = this.addAfter(this.tail, node);

    return this.tail;
  }

  remove(value: T): void {
    const node: DoublyLinkedListNode<T> | undefined = super.find(value);

    this.removeNode(node);
  }

  removeNode(node?: DoublyLinkedListNode<T>): void {
    if (!node) {
      return;
    }

    if (!node.previous) {
      this.head = node.next;
    } else {
      node.previous.next = node.next;
    }

    if (!node.next) {
      this.tail = node.previous;
    } else {
      node.next.previous = node.previous;
    }

    this.length--;
  }

  removeHead() {
    this.removeNode(this.head);
  }

  removeTail() {
    this.removeNode(this.tail);
  }
}

// const doublyLinkedList = new DoublyLinkedList<number>();

// console.log(doublyLinkedList);

// doublyLinkedList.addHead(1);
// doublyLinkedList.addHead(2);
// doublyLinkedList.addHead(3);

// doublyLinkedList.addTail(1);
// doublyLinkedList.addTail(2);
// doublyLinkedList.addTail(3);

// console.log(doublyLinkedList);
// doublyLinkedList.removeTail();
// console.log(doublyLinkedList);

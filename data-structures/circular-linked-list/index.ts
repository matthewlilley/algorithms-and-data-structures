import { LinkedList, LinkedListNode } from "../linked-list/index.ts";

export interface CirularLinkedListNode<T> extends LinkedListNode<T> {
  next: CirularLinkedListNode<T>;
}

export class CirularLinkedListNode<T> implements CirularLinkedListNode<T> {
  next: CirularLinkedListNode<T>;
  constructor(value: T, next?: CirularLinkedListNode<T>) {
    this.value = value;
    this.next = next ? next : this;
  }
}

export class CircularLinkedList<T> extends LinkedList<T> {
  head?: CirularLinkedListNode<T>;
  addHead(value: T): CirularLinkedListNode<T> {
    const node = new CirularLinkedListNode(value, this.head);

    this.head = node;

    this.length++;

    return this.head;
  }
  addTail(value: T): CirularLinkedListNode<T> {
    if (!this.head) {
      return this.addHead(value);
    }

    const node = new CirularLinkedListNode(value, this.head);

    for (let tmp = this.head; tmp !== undefined; tmp = tmp.next) {
      if (tmp.next === this.head) {
        tmp.next = node;
        break;
      }
    }

    this.length++;

    return node;
  }
}

const list = new CircularLinkedList<number>();

console.log(list.addTail(1));
console.log(list.addTail(2));
console.log(list.addTail(3));

console.log(list);

// Value should be 1
console.log(list.head?.next?.next?.next);

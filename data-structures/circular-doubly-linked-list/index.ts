import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../doubly-linked-list/index.ts";

export interface CirularDoublyLinkedListNode<T>
  extends DoublyLinkedListNode<T> {
  previous: CirularDoublyLinkedListNode<T>;
  next: CirularDoublyLinkedListNode<T>;
}

export class CirularDoublyLinkedListNode<T>
  implements CirularDoublyLinkedListNode<T> {
  previous: CirularDoublyLinkedListNode<T>;
  next: CirularDoublyLinkedListNode<T>;
  constructor(
    value: T,
    previous?: CirularDoublyLinkedListNode<T>,
    next?: CirularDoublyLinkedListNode<T>
  ) {
    this.value = value;
    this.previous = previous ? previous : this;
    this.next = next ? next : this;
  }
}

export class CircularDoublyLinkedList<T> extends DoublyLinkedList<T> {
  head?: CirularDoublyLinkedListNode<T>;
  tail?: CirularDoublyLinkedListNode<T>;
  addHead(value: T): CirularDoublyLinkedListNode<T> {
    const node = new CirularDoublyLinkedListNode(value, this.tail, this.head);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = <CirularDoublyLinkedListNode<T>>(
        this.addBefore(this.head, node)
      );
    }

    return node;
  }
  addTail(value: T): CirularDoublyLinkedListNode<T> {
    if (!this.tail) {
      return this.addHead(value);
    }

    const node = new CirularDoublyLinkedListNode(value, this.tail, this.head);

    this.tail = <CirularDoublyLinkedListNode<T>>this.addAfter(this.tail, node);

    return node;
  }
}

import { DoublyLinkedList } from "../doubly-linked-list/index.ts";

export class Deque<T> extends DoublyLinkedList<T> {
  addHead(value: T) {
    return super.addHead(value);
  }
  addTail(value: T) {
    return super.addTail(value);
  }
  removeHead() {
    return super.removeHead();
  }
  removeTail() {
    return super.removeTail();
  }
}

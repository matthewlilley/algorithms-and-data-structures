import { DoublyLinkedList, DoublyLinkedListNode } from "./index.ts";

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("head & tail is undefined", () => {
  const list = new DoublyLinkedList<number>();
  assertEquals(list.head, undefined);
  assertEquals(list.tail, undefined);
});

Deno.test("length is 0", () => {
  const list = new DoublyLinkedList<number>();
  assertEquals(list.length, 0);
});

Deno.test("tail is node after an element is pushed onto the list", () => {
  const list = new DoublyLinkedList<number>();
  list.addTail(1);
  assertEquals(list.tail, new DoublyLinkedListNode(1));
});

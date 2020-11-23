import { LinkedList, LinkedListNode } from "./index.ts";

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("head is undefined", () => {
  const list = new LinkedList<number>();
  assertEquals(list.head, undefined);
});

Deno.test("length is 0", () => {
  const list = new LinkedList<number>();
  assertEquals(list.length, 0);
});

Deno.test("length is 1 after an element is pushed onto the list", () => {
  const list = new LinkedList<number>();
  list.addHead(1);
  assertEquals(list.length, 1);
});

Deno.test("head is node after an element is pushed onto the list", () => {
  const list = new LinkedList<number>();
  list.addHead(1);
  assertEquals(list.head, new LinkedListNode(1));
});

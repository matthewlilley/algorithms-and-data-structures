import { CircularDoublyLinkedList } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("head is cicular", () => {
  const list = new CircularDoublyLinkedList();
  list.addHead(1);
  list.addHead(2);
  list.addHead(3);
  assertEquals(list.head?.next.next.next.value, 3);
  assertEquals(list.head?.previous.previous.previous.value, 3);
});

Deno.test("tail is cicular", () => {
  const list = new CircularDoublyLinkedList();
  list.addTail(1);
  list.addTail(2);
  list.addTail(3);

  assertEquals(list.tail?.previous.previous.previous.value, 3);
  assertEquals(list.tail?.next.next.next.value, 3);
});

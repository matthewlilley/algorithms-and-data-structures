import { CircularLinkedList } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("head is cicular", () => {
  const list = new CircularLinkedList();
  list.addTail(1);
  list.addTail(2);
  list.addTail(3);
  assertEquals(list.head?.next?.next?.next?.value, 1);
});

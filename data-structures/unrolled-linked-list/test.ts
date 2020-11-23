import { UnrolledLinkedList } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

const list = new UnrolledLinkedList(3);

const numbers = [0, 1, 2];

numbers.forEach((n: number) => {
  list.add(n);
});

Deno.test("node capacity is filled", () => {
  numbers.forEach((n: number, i: number) => {
    assertEquals(list.head?.array[i], n);
  });
});

Deno.test("node capacity split", () => {
  list.add(3);
  const first = [0, 1];
  const second = [2, 3];
  first.forEach((n: number, i: number) => {
    assertEquals(list.head?.array[i], n);
  });
  second.forEach((n: number, i: number) => {
    assertEquals(list.tail?.array[i], n);
  });
});

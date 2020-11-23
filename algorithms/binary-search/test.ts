import {
  binarySearch,
  binarySearchLeftmost,
  binarySearchRightmost,
} from "./index.ts";

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Binary search odd sized array", () => {
  const array = [0, 1, 2];
  assertEquals(binarySearch(array, 1), 1);
  assertEquals(binarySearch(array, 3), undefined);
});

Deno.test("Binary search even sized array", () => {
  const array = [0, 1];
  assertEquals(binarySearch(array, 1), 1);
  assertEquals(binarySearch(array, 2), undefined);
});

Deno.test("Binary search empty array returns undefined", () => {
  assertEquals(binarySearch([], 1), undefined);
});

Deno.test("Binary search duplicates", () => {
  const array = [3, 3];
  assertEquals(binarySearchLeftmost(array, 3), 0);
  assertEquals(binarySearchRightmost(array, 3), 1);
});

import { Stack } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("top is 0", () => {
  const stack = new Stack();
  assertEquals(stack.top, 0);
});

Deno.test("max is 1 when specified", () => {
  const stack = new Stack(1);
  assertEquals(stack.maximum, 1);
});

Deno.test("max is 2^32 - 1 when not specified", () => {
  const stack = new Stack();
  assertEquals(stack.maximum, Math.pow(2, 32) - 1);
});

Deno.test("top is incremeneted when an item is pushed onto the stack", () => {
  const stack = new Stack(1);
  stack.push(0);
  assertEquals(stack.top, 1);
});

Deno.test("top is decremeneted when an item is popped from the stack", () => {
  const stack = new Stack(1);
  stack.push(0);
  stack.pop();
  assertEquals(stack.top, 0);
});

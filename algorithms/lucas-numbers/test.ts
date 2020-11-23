import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { lucas } from './index.ts';

Deno.test('lucas(0) is 2', () => {
  assertEquals(lucas(0), 2);
});

Deno.test('lucas(1) is 1', () => {
  assertEquals(lucas(1), 1);
});

Deno.test('lucas(2) is 3', () => {
  assertEquals(lucas(2), 3);
});

Deno.test('lucas(3) is 4', () => {
  assertEquals(lucas(3), 4);
});

Deno.test('lucas(4) is 7', () => {
  assertEquals(lucas(4), 7);
});

Deno.test('lucas(5) is 11', () => {
  assertEquals(lucas(5), 11);
});

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { fibonacci } from "./index.ts";

// Minimum needed proof
Deno.test("fibonacci(0) is 0", () => {
  assertEquals(fibonacci(0), 0);
});

Deno.test("fibonacci(1) is 1", () => {
  assertEquals(fibonacci(1), 1);
});

Deno.test("fibonacci(2) is 1", () => {
  assertEquals(fibonacci(2), 1);
});

Deno.test("fibonacci(3) is 2", () => {
  assertEquals(fibonacci(3), 2);
});

// Deno.test("fibonacci(4) is 3", () => {
//   assertEquals(fibonacci(4), 3);
// });

// Deno.test("fibonacci(5) is 5", () => {
//   assertEquals(fibonacci(5), 5);
// });

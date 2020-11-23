import { binarySearch } from "../binary-search/index.ts";

export function exponentialSearch(
  haystack: number[],
  needle: number
): number | undefined {
  // If hackstack is empty return.
  if (!haystack.length) {
    return;
  }

  let bound = 1;

  while (bound < haystack.length && haystack[bound] < needle) {
    bound *= 2;
  }

  return binarySearch(
    haystack,
    needle,
    bound / 2,
    Math.min(bound + 1, haystack.length)
  );
}

const array = [...Array(100).keys()];
console.log(exponentialSearch(array, 100));

export function bubbleSort(array: number[]) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    // We haven't swapped anything on this run, break.
    if (!swapped) {
      break;
    }
  }

  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(bubbleSort(array));

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      // Swap
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(insertionSort(array));

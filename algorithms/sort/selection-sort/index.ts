export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) {
        // New minimum found
        minimum = j;
      }
    }

    if (minimum !== i) {
      // Swap
      [array[i], array[minimum]] = [array[minimum], array[i]];
    }
  }

  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(selectionSort(array));

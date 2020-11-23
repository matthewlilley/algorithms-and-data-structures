function combSort(array: number[]) {
  // Gap
  let gap = array.length;

  // Shrink factor
  let shrink = 1.3;

  let sorted = false;

  while (!sorted) {
    gap = Math.floor(gap / shrink);

    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }

    for (let i = 0; i + gap < array.length; i++) {
      if (array[i] > array[i + gap]) {
        [array[i], array[i + gap]] = [array[i + gap], array[i]];
        sorted = false;
      }
    }
  }

  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(combSort(array));

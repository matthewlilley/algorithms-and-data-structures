function merge(left: number[], right: number[]) {
  const array: number[] = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k++] = left[i++];
    } else {
      array[k++] = right[j++];
    }
  }

  while (i < left.length) {
    array[k++] = left[i++];
  }

  while (j < right.length) {
    array[k++] = right[j++];
  }

  return array;
}

function mergeSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }

  // Divide
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  // Conquer && Combine
  return merge(mergeSort(left), mergeSort(right));
}

// Test

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(array);

console.log(mergeSort(array));

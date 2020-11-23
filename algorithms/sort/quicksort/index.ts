export function partition(array: number[], low: number, high: number) {
  // console.log(array, high);
  const pivot = array[high];

  // Index of smallest element
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // If current element is less than pivot
    if (array[j] < pivot) {
      i++;
      // swap arr[i] and arr[j]
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // swap array[i+1] and array[high] (or pivot)
  const temp1 = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp1;

  return i + 1;
}

export function quicksort(array: number[], low: number, high: number) {
  if (low < high) {
    const p = partition(array, low, high);
    quicksort(array, low, p - 1);
    quicksort(array, p + 1, high);
  }

  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(array);

quicksort(array, 0, array.length - 1);

console.log(array);

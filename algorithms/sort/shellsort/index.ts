// Using Marcin Ciura's gap sequence, with an inner insertion sort.
function shellsort(array: number[]) {
  const n = array.length;
  const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

  // Start with the largest gap and work down to a gap of 1
  for (const gap of gaps) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already in gapped order
    // keep adding one more element until the entire array is gap sorted
    for (let i = gap; i < n; i += 1) {
      // add a[i] to the elements that have been gap sorted
      // save a[i] in temp and make a hole at position i
      let temp = array[i];
      // shift earlier gap-sorted elements up until the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      // put temp (the original a[i]) in its correct location
      array[j] = temp;
    }
  }
  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log("Before", array);

console.log("After", shellsort(array));

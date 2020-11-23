function parent(i: number) {
  return Math.floor((i - 1) / 2);
}

function leftChild(i: number) {
  return 2 * i + 1;
}

function rightChild(i: number) {
  return 2 * i + 2;
}

function siftDown(array: number[], start: number, end: number) {
  let root = start;

  while (leftChild(root) <= end) {
    let child = leftChild(root);
    let swap = root;

    if (array[swap] < array[child]) {
      swap = child;
    }

    if (child + 1 <= end && array[swap] < array[child + 1]) {
      swap = child + 1;
    }

    if (swap === root) {
      return;
    } else {
      // Swap
      [array[root], array[swap]] = [array[swap], array[root]];
      root = swap;
    }
  }
}

function heapify(array: number[]) {
  let start = parent(array.length - 1);
  while (start >= 0) {
    // Sift down
    siftDown(array, start, array.length - 1);

    // Decrement start
    start--;
  }
}

function heapsort(array: number[]) {
  // heapify array
  heapify(array);

  let end = array.length - 1;

  while (end > 0) {
    // swap
    [array[end], array[0]] = [array[0], array[end]];
    // reduce size
    end--;
    // restore heap
    siftDown(array, 0, end);
  }

  return array;
}

import { shuffle } from "../../fisher-yates-shuffle/index.ts";

const array = shuffle([...Array(100).keys()]);

console.log(heapsort(array));

let index = 1;

console.log({
  index,
  parent: parent(index),
  leftChild: leftChild(index),
  rightChild: rightChild(index),
});

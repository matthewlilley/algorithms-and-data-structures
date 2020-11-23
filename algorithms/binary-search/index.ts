export function binarySearch(
  haystack: number[],
  needle: number,
  left: number = 0,
  right: number = haystack.length - 1
): number | undefined {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (haystack[middle] < needle) {
      left = middle + 1;
    } else if (haystack[middle] > needle) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
}

export function binarySearchLeftmost(
  haystack: number[],
  needle: number,
  left: number = 0,
  right: number = haystack.length
) {
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (haystack[middle] < needle) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
}

export function binarySearchRightmost(
  haystack: number[],
  needle: number,
  left: number = 0,
  right: number = haystack.length
) {
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (haystack[middle] > needle) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return right - 1;
}

// const array = [3, 3];
// console.log(binarySearchLeftmost(array, 3));
// console.log(binarySearchRightmost(array, 3));

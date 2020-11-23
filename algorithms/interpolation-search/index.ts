function interpolationSearch<T>(haystack: number[], needle: number) {
  let low = 0;
  let middle = -1;
  let high = haystack.length - 1;

  const match =
    haystack[high] !== haystack[low] &&
    needle >= haystack[low] &&
    needle <= haystack[high];

  while (match) {
    middle =
      low +
      ((high - low) / (haystack[high] - haystack[low])) *
        (needle - haystack[low]);

    console.log({ haystack, middle, needle });

    if (haystack[middle] === needle) {
      console.log(`Found needle in haystack #${middle}`);
      return haystack[middle];
    } else if (haystack[middle] < needle) {
      low = middle + 1;
    } else if (haystack[middle] > needle) {
      high = middle - 1;
    }
  }

  if (needle === haystack[low]) {
    return low;
  }
}

const array = [...Array(100).keys()];
// delete array[99];
console.log(interpolationSearch(array, 99));

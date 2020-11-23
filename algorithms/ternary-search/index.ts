export function ternarySearch(
  haystack: number[],
  needle: number,
  left: number = 0,
  right: number = haystack.length - 1
): number | undefined {
  if (right >= left) {
    // Thirds, so we have two middles
    let leftMiddle = Math.round(left + Math.abs(left - right) / 3);
    let rightMiddle = Math.round(right - Math.abs(left - right) / 3);

    if (haystack[leftMiddle] === needle) {
      return leftMiddle;
    } else if (haystack[rightMiddle] === needle) {
      return rightMiddle;
    }

    if (needle < haystack[leftMiddle]) {
      return ternarySearch(haystack, needle, left, leftMiddle - 1);
    } else if (needle > haystack[rightMiddle]) {
      return ternarySearch(haystack, needle, rightMiddle + 1, right);
    }

    return ternarySearch(haystack, needle, leftMiddle + 1, rightMiddle - 1);
  }
}

const array = [...Array(90).keys()];

// 3
console.log(ternarySearch(array, 3));

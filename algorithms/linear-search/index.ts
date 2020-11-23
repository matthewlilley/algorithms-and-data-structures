// Linear search, left to right
export function linearSearch<T>(haystack: T[], needle: T): number | undefined {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
}

// 2
console.log(linearSearch(["d", "w", "s"], "s"));

// 2
console.log(linearSearch([1, 2, 3], 3));

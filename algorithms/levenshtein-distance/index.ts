// https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm

export function levenshtein(a: string, b: string) {
  let i;
  let j;

  const d: number[][] = [];

  for (i = 0; i <= a.length; i++) {
    d[i] = [i];
  }

  for (j = 0; j <= b.length; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // deletion
        d[i][j - 1] + 1, // insertion
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }

  return d[a.length][b.length];
}

// 2
console.log(levenshtein('AC', 'CA'));

// 2
console.log(levenshtein('CAT', 'CTA'));

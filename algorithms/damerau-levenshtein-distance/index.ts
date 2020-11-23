// https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance

export function optimalStringAlignmentDistance(a: string, b: string) {
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
      if (i > 1 && j > 1 && a[i] === b[j - 1] && a[i - 1] === b[j]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      } // transposition
    }
  }

  return d[a.length][b.length];
}

export function damerauLevenshteinDistance(a: string, b: string) {
  let i: number;
  let j: number;

  const da: { [key: string]: number } = {};

  a = a.toUpperCase();
  b = b.toUpperCase();

  for (const letter of a + b) {
    if (!da[letter]) {
      da[letter] = 0;
    }
  }

  const d: number[][] = new Array(a.length);

  for (i = -1; i <= a.length; i++) {
    d[i] = new Array(b.length);
    for (j = -1; j <= b.length; j++) {
      d[i][j] = 0;
    }
  }

  const INFINITY = a.length + b.length;
  d[-1][-1] = INFINITY;

  for (i = 0; i < a.length; i++) {
    d[i][-1] = INFINITY;
    d[i][0] = i;
  }

  for (j = 0; j < b.length; j++) {
    d[-1][j] = INFINITY;
    d[0][j] = j;
  }

  for (i = 1; i <= a.length; i++) {
    let db = 0;
    for (j = 1; j <= b.length; j++) {
      const k: number = da[b[j - 1]];
      const l: number = db;

      let cost;

      if (a[i - 1] === b[j - 1]) {
        db = j;
        cost = 0;
      } else {
        cost = 1;
      }

      d[i][j] = Math.min(
        d[i - 1][j - 1] + cost, // substitution
        d[i][j - 1] + 1, // insertion
        d[i - 1][j] + 1, // deletion
        d[k - 1][l - 1] + (i - k - 1) + 1 + (j - l - 1) // transposition
      );
    }

    da[a[i - 1]] = i;
  }

  // console.log(d);

  // console.log(da);

  return d[a.length][b.length];
}

// 3
console.log(optimalStringAlignmentDistance('ca', 'abc'));

// 2
console.log(damerauLevenshteinDistance('ca', 'abc'));

// 2
console.log(damerauLevenshteinDistance('a cat', 'a abct'));

// 1
console.log(damerauLevenshteinDistance('smtih', 'smith'));

// 1
console.log(damerauLevenshteinDistance('cat', 'cta'));

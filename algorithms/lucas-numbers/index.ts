// Find the nth lucas number
export function lucas(n: number): number {
  const sequence = [2, 1];

  if (n < 2) {
    return sequence[n];
  }

  for (let i = 2; i < n + 1; i++) {
    const tmp = sequence[0] + sequence[1];
    // Swap
    sequence[0] = sequence[1];
    // Set
    sequence[1] = tmp;
  }

  return sequence[1];
}

export function lucasRecursive(n: number): number {
  const sequence = [2, 1];

  if (n < 2) {
    return sequence[n];
  }

  return lucas(n - 1) + lucas(n - 2);
}

console.log(lucas(9));
console.log(lucasRecursive(9));

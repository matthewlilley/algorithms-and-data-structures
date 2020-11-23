// Find the nth fibonacci number
export function fibonacci(n: number): number {
  const sequence = [0, 1];

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

// Recursive
export function fibonacciRecursive(n: number): number {
  const sequence = [0, 1];
  if (n < 2) {
    return sequence[n];
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Phi
import { phi } from '../phi/index.ts';
export function fibonacciPhi(n: number): number {
  const sequence = [0, 1, 1, 2, 3, 5];

  if (n < 6) {
    return sequence[n];
  }

  let f = 5;

  const PHI = phi();

  for (let i = 5; i < n; i++) {
    f = Math.round(f * PHI);
  }

  return f;
}

// console.log(fibonacci(1000));

// console.log(fibonacciPhi(1000));

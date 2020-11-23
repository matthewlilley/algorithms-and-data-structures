function gcd(a: number, b: number): number {
  if (a === 0) {
    return b;
  }

  return gcd(b % a, a);
}

export function eulersTotient(n: number) {
  let totient = 1;

  for (let i = 2; i < n; i++) {
    if (gcd(i, n) === 1) {
      totient++;
    }
  }

  return totient;
}

for (let i = 1; i <= 10; i++) {
  console.log(eulersTotient(i));
}

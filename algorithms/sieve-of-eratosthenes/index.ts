export function sieveOfEraosthenes(n: number) {
  const array = [...Array(n)].map((i) => i).fill(true);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (array[i]) {
      for (let j = Math.pow(i, 2); j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // If v is true, print prime key
  for (const [k, v] of array.entries()) {
    if (v) {
      console.log(k);
    }
  }
}

sieveOfEraosthenes(100);

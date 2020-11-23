// m - modulus
let m = 16;

// c - increment
let c = 1;

// a - multiplier
let a = 5;

export function random(x: number = 1) {
  x = (a * x + c) % m;
  return x;
}

for (let i = 0; i < 16; i++) {
  const rng = random(i);
  console.log({
    index: i,
    integer: rng,
    binary: rng.toString(2),
    float: rng / m,
    boolean: Math.round(rng / m),
  });
}

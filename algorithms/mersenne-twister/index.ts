// Coefficients
const w = 32,
  n = 624,
  m = 397,
  r = 31;

const a = 0x9908b0df;

const u = 11,
  d = 0xffffffff;

const s = 7,
  b = 0x9d2c5680;

const t = 15,
  c = 0xefc60000;

const l = 18;

const f = 1812433253;

const mt = new Uint32Array(n);

const lowerMask = (1 << r) - 1;

const upperMask = ~lowerMask >>> 0;

let index = n + 1;

export function seed(seed: number = Date.now()) {
  index = n;
  mt[0] = seed >>> w;
  for (index = 1; index < n; index++) {
    const z = mt[index - 1] ^ (mt[index - 1] >>> (w - 2));
    mt[index] =
      ((f * ((z & 0xffff0000) >>> 16)) << 16) + (f * (z & 0x0000ffff) + index);
  }
}

export function twist() {
  for (let i = 0; i < n; i++) {
    let x = (mt[i] & upperMask) + (mt[(i + 1) % n] & lowerMask);
    let xa = x >>> 1;
    if (x % 2 !== 0) {
      xa = xa ^ a;
    }
    mt[i] = mt[(i + m) % n] ^ xa;
  }
  index = 0;
}

export function random() {
  if (index >= n) {
    if (index > n) {
      seed(5489);
    }
    twist();
  }

  let y = mt[index++];

  y ^= (y >>> u) & d;
  y ^= (y << s) & b;
  y ^= (y << t) & c;
  y ^= y >>> l;

  return y >>> w;
}

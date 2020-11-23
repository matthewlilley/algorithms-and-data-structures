// this algorithm (k=33) was first reported by dan bernstein many years ago in comp.lang.c. another version of this
// algorithm (now favored by bernstein) uses xor: hash(i) = hash(i - 1) * 33 ^ str[i]; the magic of number 33
// (why it works better than many other constants, prime or not) has never been adequately explained.
export function djb2(string: string) {
  let hash = 5381;

  for (const c of string) {
    hash = (hash << 5) + hash + c.charCodeAt(0); // hash * 33 + c
    // hash = 33 * hash + c.charCodeAt(0);
  }

  // Unsigned shift right
  return hash >>> 1;
}

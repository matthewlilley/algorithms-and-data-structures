export function loselose(string: string) {
  let hash = 0;

  for (const c of string) {
    hash += c.charCodeAt(0);
  }

  return hash;
}

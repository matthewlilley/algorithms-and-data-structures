export function shuffle<T>(array: T[]): T[] {
  for (let i = 0; i < array.length - 1; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// console.log(shuffle([0, 1, 2]));

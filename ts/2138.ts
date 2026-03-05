function divideString(s: string, k: number, fill: string): string[] {
  const arr = [];

  for (let i = 0; i < s.length; i += k) {
    let slice = s.slice(i, i + k);

    while (slice.length < k) {
      slice += fill;
    }

    arr.push(slice);
  }

  return arr;
};
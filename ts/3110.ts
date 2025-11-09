function scoreOfString(s: string): number {
  let counter = 0;

  for (let i = 0; i < s.length - 1; i++) {
    counter += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return counter;
}

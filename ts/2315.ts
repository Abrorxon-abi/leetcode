function countAsterisks(s: string): number {
  let acc = 0;
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      arr.push(s[i]);
      continue;
    }
    if (arr.length % 2 === 0 && s[i] === "*") {
      acc++;
    }
  }

  return acc;
}

function findTheDifference(s: string, t: string): string {
  let sum1 = s.split("").reduce((acc, ch) => (acc += ch.charCodeAt(0)), 0);
  let sum2 = t.split("").reduce((acc, ch) => (acc += ch.charCodeAt(0)), 0);

  return String.fromCharCode(sum2 - sum1);
}

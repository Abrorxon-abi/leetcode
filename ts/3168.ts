function minimumChairs(s: string): number {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      curr++;
    } else {
      curr--;
    }

    if (curr > max) max = curr;
  }

  return max;
}

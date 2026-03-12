function countGoodSubstrings(s: string): number {
  let res: number = 0;

  for (let i: number = 0; i < s.length - 2; i++) {
    const first: string = s[i];
    const second: string = s[i + 1];
    const third: string = s[i + 2];
    if (first !== second && first !== third && second !== third) res++;
  }

  return res;
}

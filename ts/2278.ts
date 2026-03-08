function percentageLetter(s: string, letter: string): number {
  if (!s.includes(letter)) return 0;

  const reg = new RegExp(letter, "g");
  return Math.floor((s.match(reg)?.length! / s.length) * 100);
}

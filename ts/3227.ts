function doesAliceWin(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) return true;
  }

  return false;
}

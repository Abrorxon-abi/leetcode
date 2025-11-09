function hasSameDigits(s: string): boolean {
  while (s.length > 2) {
    let newStr = "";
    for (let i = 0; i < s.length - 1; i++) {
      newStr += (+s[i] + +s[i + 1]) % 10;
    }
    s = newStr;
  }

  return s[0] === s[1];
}

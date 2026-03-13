function repeatedSubstringPattern(s: string): boolean {
  const twice = s + s;
  return twice.slice(1, twice.length - 1).includes(s);
}

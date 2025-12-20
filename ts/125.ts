function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  let s2 = s.split("").reverse().join("");

  return s === s2;
}

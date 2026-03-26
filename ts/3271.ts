function stringHash(s: string, k: number): string {
  let ans = "";
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % k === 0 && i !== 0) {
      ans += String.fromCharCode((counter % 26) + 97);
      counter = 0;
    }
    counter += s.charCodeAt(i) - 97;
  }

  ans += String.fromCharCode((counter % 26) + 97);
  return ans;
}

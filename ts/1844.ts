function replaceDigits(s: string): string {
  for (let i = 1; i < s.length; i += 2) {
    let asciiCode = s.charCodeAt(i - 1);
    asciiCode += Number(s[i]);
    s = s.slice(0, i) + String.fromCharCode(asciiCode) + s.slice(i + 1);
  }

  return s;
}

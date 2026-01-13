function clearDigits(s: string): string {
  const chars = [];
  for (let el of s) {
    if (!/^\d+$/.test(el)) {
      chars.push(el);
    } else {
      chars.pop();
    }
  }

  return chars.join("");
}

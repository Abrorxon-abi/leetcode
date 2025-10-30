function restoreString(s: string, indices: number[]): string {
  let obj: Record<number, string> = {};
  for (let i = 0; i < s.length; i++) {
    obj[indices[i]] = s[i];
  }

  return Object.values(obj).join("");
}

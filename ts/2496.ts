function maximumValue(strs: string[]): number {
  let max = 0;

  for (let str of strs) {
    if (/^\d+$/.test(str)) {
      max = Math.max(max, Number(str));
    } else {
      max = Math.max(max, str.length);
    }
  }

  return max;
}

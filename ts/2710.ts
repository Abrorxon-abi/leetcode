function removeTrailingZeros(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== "0") return num.slice(0, i + 1);
  }

  return num;
}

function concatHex36(n: number): string {
  let hexadecimal = (n * n).toString(16).toUpperCase();
  let hexatrigesimal = (n * n * n).toString(36).toUpperCase();

  return `${hexadecimal}${hexatrigesimal}`;
}

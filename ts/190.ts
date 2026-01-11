function reverseBits(n: number): number {
  const binaryString = n.toString(2).padStart(32, "0");
  const reversedBinary = binaryString.split("").reverse().join("");
  return parseInt(reversedBinary, 2);
}

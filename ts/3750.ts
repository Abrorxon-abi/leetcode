function minimumFlips(n: number): number {
  let binary = n.toString(2);
  let reversedBinary = binary.split("").reverse().join("");
  let acc = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== reversedBinary[i]) acc++;
  }

  return acc;
}

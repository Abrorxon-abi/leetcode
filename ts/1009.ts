function bitwiseComplement(n: number): number {
  let binary = n.toString(2).split("");

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      binary[i] = "1";
    } else {
      binary[i] = "0";
    }
  }

  return parseInt(binary.join(""), 2);
}

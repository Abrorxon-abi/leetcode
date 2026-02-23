function binaryGap(n: number): number {
  let distance = 0;
  const binary = n.toString(2);
  let first = 0;
  let flag = true;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1" && flag) {
      first = i;
      flag = false;
    } else if (binary[i] === "1") {
      distance = Math.max(distance, i - first);
      first = i;
    }
  }

  return distance;
}

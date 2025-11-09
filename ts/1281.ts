function subtractProductAndSum(n: number): number {
  const numArr = n.toString().split("").map(Number);
  let sum = 0;
  let product = 1;

  for (let num of numArr) {
    sum += num;
    product *= num;
  }

  return product - sum;
}

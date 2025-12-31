function isBalanced(num: string): boolean {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num.length; i++) {
    let n = Number(num[i]);
    if (i % 2 === 0) {
      even += n;
    } else {
      odd += n;
    }
  }

  return even === odd;
}

function climbStairs(n: number): number {
  return fibonacciIterative(n);
}

function fibonacciIterative(n: number) {
  n += 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let nextNum = a + b;
    a = b;
    b = nextNum;
  }

  return b;
}

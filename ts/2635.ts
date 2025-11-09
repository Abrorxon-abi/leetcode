function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    array.push(fn(arr[i], i));
  }

  return array;
}

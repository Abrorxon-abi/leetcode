type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      array.push(arr[i]);
    }
  }

  return array;
}

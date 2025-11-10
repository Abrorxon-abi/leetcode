function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let counter = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a && i < j) {
        for (let k = 0; k < arr.length; k++) {
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c &&
            j < k
          ) {
            counter++;
          }
        }
      }
    }
  }

  return counter;
}

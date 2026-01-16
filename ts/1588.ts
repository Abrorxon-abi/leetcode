function sumOddLengthSubarrays(arr: number[]): number {
  let acc = 0;
  let length = 1;

  for (let i = 0; i < arr.length; i++) {
    while (length <= arr.length) {
      let sliced = arr.slice(i, length).reduce((acc, n) => (acc += n), 0);
      acc += sliced;
      length += 2;
    }
    if (i % 2 === 0) {
      length = 2;
    } else {
      length = 1;
    }
  }

  return acc;
}

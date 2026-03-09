function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < arr2.length; i++) {
    const len = arr1.length;
    arr1 = arr1.filter((n) => n !== arr2[i]);

    for (let j = 0; j < len - arr1.length; j++) {
      ans.push(arr2[i]);
    }
  }

  if (arr1.length > 0) {
    arr1.sort((a, b) => a - b);
    ans.push(...arr1);
  }

  return ans;
}

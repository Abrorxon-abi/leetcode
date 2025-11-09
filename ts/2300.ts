function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < spells.length; i++) {
    let threshold = Math.ceil(success / spells[i]);
    ans.push(binarySearch(potions, threshold));
  }
  return ans;
}

function binarySearch(arr: number[], num: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr.length - left;
}

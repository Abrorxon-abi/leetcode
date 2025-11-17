function kLengthApart(nums: number[], k: number): boolean {
  const allIndeces = findAllIndices(nums, 1);
  let ans = true;

  for (let i = 0; i < allIndeces.length - 1; i++) {
    if (allIndeces[i + 1] - allIndeces[i] > k) {
      ans = true;
    } else {
      ans = false;
    }
  }

  return ans;
}

function findAllIndices(arr: number[], element: number) {
  const indices = [];
  let currentIndex = arr.indexOf(element);
  while (currentIndex !== -1) {
    indices.push(currentIndex);
    currentIndex = arr.indexOf(element, currentIndex + 1);
  }
  return indices;
}

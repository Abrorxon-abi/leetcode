function canSeePersonsCount(heights: number[]): number[] {
  const res = new Array(heights.length).fill(0);
  const stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    let visibleHeights = 0;
    while (stack.length && heights[i] > stack[stack.length - 1]) {
      stack.pop();
      visibleHeights++;
    }
    if (stack.length) {
      visibleHeights++;
    }
    res[i] = visibleHeights;
    stack.push(heights[i]);
  }
  return res;
}

function minOperations(boxes: string): number[] {
  const ans = Array.from({ length: boxes.length }, () => 0);

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === "1") {
        ans[i] = ans[i] + Math.abs(j - i);
      }
    }
  }

  return ans;
}

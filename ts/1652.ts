function decrypt(code: number[], k: number): number[] {
  const ans: number[] = [];
  let j = 0;
  let step = 0;

  for (let i = 0; i < code.length; i++) {
    let acc = 0;
    if (k > 0) {
      j = i + 1;
      while (step < Math.abs(k)) {
        if (code[j] != undefined) {
          acc += code[j];
          j++;
          step++;
        } else {
          j = 0;
        }
      }
      ans.push(acc);
    } else if (k < 0) {
      j = i - 1;
      while (step < Math.abs(k)) {
        if (code[j] != undefined) {
          acc += code[j];
          j--;
          step++;
        } else {
          j = code.length - 1;
        }
      }
      ans.push(acc);
    } else if (k === 0) {
      ans.push(0);
    }
    j = 0;
    step = 0;
  }

  return ans;
}

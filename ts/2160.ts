function minimumSum(num: number): number {
  let acc = 0;
  let qstr = num
    .toString()
    .split("")
    .map(Number)
    .filter((n) => typeof n === "number" && n != 0);

  qstr.sort((a, b) => a - b);

  if (qstr.length === 1) {
    return qstr[0];
  }

  if (qstr.length > 2) {
    while (qstr.length != 0) {
      let max = 0;
      let min = 0;
      if (qstr.length) {
        max = qstr.pop();
      }
      if (qstr.length) {
        min = qstr.shift();
      }

      acc += +`${min}${max}`;
    }
  } else {
    acc += +qstr[0];
    acc += +qstr[1];
  }
  return acc;
}

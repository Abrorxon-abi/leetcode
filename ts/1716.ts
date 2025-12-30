function totalMoney(n: number): number {
  let week = 0;
  let day = 0;
  let acc = 0;

  for (let i = 0; i < n; i++) {
    acc += day + week + 1;
    day++;
    if (day === 7) {
      week++;
      day = 0;
    }
  }

  return acc;
}

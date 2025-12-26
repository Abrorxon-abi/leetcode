function bestClosingTime(customers: string): number {
  let acc = 0;
  let idx = 0;
  let best = 0;

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") {
      acc++;
    } else {
      acc--;
    }
    if (acc > best) {
      best = acc;
      idx = i + 1;
    }
  }

  return idx;
}

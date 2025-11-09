function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.reduce((acc, n) => {
    if (n >= target) acc++;

    return acc;
  }, 0);
}

function countTestedDevices(batteryPercentages: number[]): number {
  let tested = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] - tested > 0) {
      tested++;
    }
  }

  return tested;
}

function largestGoodInteger(num: string): string {
  const sameNums = [
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
    "777",
    "888",
    "999",
    "000",
  ];

  const repeatedNums = [];

  for (let i = 0; i < sameNums.length; i++) {
    if (num.includes(sameNums[i])) {
      repeatedNums.push(sameNums[i]);
    }
  }

  if (repeatedNums.length > 1) {
    return Math.max(...repeatedNums).toString();
  } else if (repeatedNums.length === 1) {
    return repeatedNums[0];
  }

  return "";
}

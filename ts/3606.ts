function validateCoupons(
  code: string[],
  businessLine: string[],
  isActive: boolean[]
): string[] {
  const PRIORITY_BUSINESS = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  };
  type BusinessLine = keyof typeof PRIORITY_BUSINESS;
  const PATTERN = /^[A-Za-z0-9_]+$/;
  const validCoupons: [BusinessLine, string][] = [];
  const ans: string[] = [];

  for (let i = 0; i < code.length; i++) {
    if (
      code[i].match(PATTERN) &&
      businessLine[i] in PRIORITY_BUSINESS &&
      isActive[i]
    ) {
      validCoupons.push([businessLine[i] as BusinessLine, code[i]]);
    }
  }

  validCoupons.sort((a, b) => {
    if (a[0] !== b[0]) {
      return PRIORITY_BUSINESS[a[0]] - PRIORITY_BUSINESS[b[0]];
    }
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });

  for (let i = 0; i < validCoupons.length; i++) {
    ans.push(validCoupons[i][1]);
  }

  return ans;
}

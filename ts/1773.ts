function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let acc = 0;
  let j = 0;
  switch (ruleKey) {
    case "type":
      j = 0;
      break;
    case "color":
      j = 1;
      break;
    default:
      j = 2;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][j] === ruleValue) acc++;
  }

  return acc;
}

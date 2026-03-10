function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string,
): boolean {
  const targetWordSum = Number(
    [...targetWord].reduce(
      (acc, ch) => (acc += String(ch.charCodeAt(0) - 97)),
      "",
    ),
  );

  const firstWordSum = Number(
    [...firstWord].reduce(
      (acc, ch) => (acc += String(ch.charCodeAt(0) - 97)),
      "",
    ),
  );

  const secondWordSum = Number(
    [...secondWord].reduce(
      (acc, ch) => (acc += String(ch.charCodeAt(0) - 97)),
      "",
    ),
  );

  return targetWordSum === firstWordSum + secondWordSum;
}

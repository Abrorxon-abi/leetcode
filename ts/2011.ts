function finalValueAfterOperations(operations: string[]): number {
  let counter = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      counter--;
    } else {
      counter++;
    }
  }

  return counter;
}

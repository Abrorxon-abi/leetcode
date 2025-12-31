function calPoints(operations: string[]): number {
  const scores: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      scores.pop();
    } else if (operations[i] === "D") {
      scores.push(scores[scores.length - 1] * 2);
    } else if (operations[i] === "+") {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    } else {
      scores.push(Number(operations[i]));
    }
  }

  return scores.reduce((acc, n) => (acc += n), 0);
}

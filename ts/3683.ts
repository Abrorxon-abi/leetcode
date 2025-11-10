function earliestTime(tasks: number[][]): number {
  let min = Infinity;

  for (let i = 0; i < tasks.length; i++) {
    min = Math.min(min, tasks[i][0] + tasks[i][1]);
  }

  return min;
}

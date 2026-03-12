function countStudents(students: number[], sandwiches: number[]): number {
  const map = new Map();
  let acc = 0;

  for (const ch of students) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (map.get(sandwiches[i]) === 0 || map.get(sandwiches[i]) === undefined) {
      for (let val of map.values()) {
        acc += val;
      }
      return acc;
    } else {
      map.set(sandwiches[i], map.get(sandwiches[i]) - 1);
    }
  }

  return 0;
}

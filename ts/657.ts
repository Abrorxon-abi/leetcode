function judgeCircle(moves: string): boolean {
  const map = new Map();

  for (const ch of moves) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  return map.get("L") === map.get("R") && map.get("U") === map.get("D");
}

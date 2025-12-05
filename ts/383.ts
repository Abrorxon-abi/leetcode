function canConstruct(ransomNote: string, magazine: string): boolean {
  const obj1: Record<string, number> = [...ransomNote].reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const obj2: Record<string, number> = [...magazine].reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  for (let char in obj1) {
    if (!obj2[char] || obj2[char] < obj1[char]) return false;
  }

  return true;
}

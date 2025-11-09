function maxFreqSum(s: string): number {
  const vowels = "aoeui";
  const obj: Record<string, number> = {};

  for (const char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  const entries = Object.entries(obj) as [string, number][];

  entries.sort((a, b) => b[1] - a[1]);

  const filteredVowels = entries.filter((arr) => {
    return vowels.includes(arr[0]);
  });

  const filteredConsonants = entries.filter((arr) => {
    return !vowels.includes(arr[0]);
  });

  return (filteredConsonants[0]?.[1] || 0) + (filteredVowels[0]?.[1] || 0);
}

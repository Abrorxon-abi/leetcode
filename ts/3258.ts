function countKConstraintSubstrings(s: string, k: number): number {
  function getAllSubstrings(str: string) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j));
      }
    }

    return result;
  }

  let acc = 0;

  const substrings = getAllSubstrings(s);

  for (let i = 0; i < substrings.length; i++) {
    const ones = new RegExp("1", "g");
    const zeros = new RegExp("0", "g");

    const matches1 = substrings[i].match(ones) ?? [];
    const matches0 = substrings[i].match(zeros) ?? [];

    if (matches0?.length <= k || matches1?.length <= k) acc++;
  }

  return acc;
}

function checkStrings(s1: string, s2: string): boolean {
  const s1_even = [];
  const s1_odd = [];
  const s2_even = [];
  const s2_odd = [];

  for (let i = 0; i < s1.length; i++) {
    if (i % 2 === 0) {
      s1_even.push(s1[i]);
      s2_even.push(s2[i]);
    } else {
      s1_odd.push(s1[i]);
      s2_odd.push(s2[i]);
    }
  }

  s1_even.sort();
  s1_odd.sort();
  s2_even.sort();
  s2_odd.sort();

  return (
    s1_even.join("") === s2_even.join("") && s1_odd.join("") === s2_odd.join("")
  );
}

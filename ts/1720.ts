function decode(encoded: number[], first: number): number[] {
  const ans = [first];

  for (let i = 0; i < encoded.length; i++) {
    ans.push(encoded[i] ^ ans[i]);
  }

  return ans;
}

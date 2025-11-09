function processQueries(queries: number[], m: number): number[] {
  const P = Array.from({ length: m }, (_, i) => i + 1);
  const ans = [];

  for (let i = 0; i < queries.length; i++) {
    ans.push(P.indexOf(queries[i]));
    let el = P.splice(P.indexOf(queries[i]), 1);

    P.unshift(...el);
  }

  return ans;
}

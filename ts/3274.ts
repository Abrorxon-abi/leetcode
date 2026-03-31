function checkTwoChessboards(
  coordinate1: string,
  coordinate2: string,
): boolean {
  const crd1 = "aceg".includes(coordinate1[0])
    ? Number(coordinate1[1]) % 2 === 0
    : Number(coordinate1[1]) % 2 !== 0;

  const crd2 = "aceg".includes(coordinate2[0])
    ? Number(coordinate2[1]) % 2 === 0
    : Number(coordinate2[1]) % 2 !== 0;

  return crd1 === crd2;
}

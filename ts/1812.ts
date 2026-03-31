function squareIsWhite(coordinates: string): boolean {
  return "aceg".includes(coordinates[0])
    ? Number(coordinates[1]) % 2 === 0
    : Number(coordinates[1]) % 2 !== 0;
}

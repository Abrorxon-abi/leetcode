function convertDateToBinary(date: string): string {
  return date
    .split("-")
    .map((n) => Number(n).toString(2))
    .join("-");
}

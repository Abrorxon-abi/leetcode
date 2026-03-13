function countSegments(s: string): number {
  return s.split(" ").filter(String).length;
}

function removeOccurrences(s: string, part: string): string {
  while (s.match(new RegExp(part))) {
    s = s.replace(part, "");
  }

  return s;
}

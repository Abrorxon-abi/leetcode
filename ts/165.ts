// Problem Statement: https://leetcode.com/problems/compare-version-numbers/

function compareVersion(version1: string, version2: string): number {
  const ver1 = version1.split(".").map(Number);
  const ver2 = version2.split(".").map(Number);

  const maxLen = Math.max(ver1.length, ver2.length);

  for (let i = 0; i < maxLen; i++) {
    const a = ver1[i] ?? 0;
    const b = ver2[i] ?? 0;

    if (a > b) return 1;
    if (a < b) return -1;
  }

  return 0;
}

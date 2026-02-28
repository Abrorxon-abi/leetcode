function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const map = new Map<number, Set<number>>();
  const ans: number[] = new Array(k).fill(0);

  for (let arr of logs) {
    if (!map.get(arr[0])) {
      map.set(arr[0], new Set());
      map.get(arr[0])?.add(arr[1]);
    } else {
      map.get(arr[0])?.add(arr[1]);
    }
  }

  for (let userId of map.keys()) {
    const size = map.get(userId)?.size!;
    if (size <= k) {
      ans[size - 1]++;
    }
  }

  return ans;
}

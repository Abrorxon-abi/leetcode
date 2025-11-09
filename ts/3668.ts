function recoverOrder(order: number[], friends: number[]): number[] {
  return order.filter((n) => {
    return friends.includes(n);
  });
}

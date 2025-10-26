// Problem Statement: https://leetcode.com/problems/my-calendar-iii/description/

class MyCalendarThree {
  private diff: Record<number, number>;
  private maxBooking: number;

  constructor() {
    this.diff = {};
    this.maxBooking = 0;
  }

  book(startTime: number, endTime: number): number {
    this.diff[startTime] = (this.diff[startTime] || 0) + 1;
    this.diff[endTime] = (this.diff[endTime] || 0) - 1;

    const sorted = Object.keys(this.diff)
      .map(Number)
      .sort((a, b) => a - b);
    let active = 0;
    for (let i = 0; i < sorted.length; i++) {
      active += this.diff[sorted[i]];
      if (active > this.maxBooking) this.maxBooking = active;
    }

    return this.maxBooking;
  }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */

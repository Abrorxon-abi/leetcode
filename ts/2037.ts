function minMovesToSeat(seats: number[], students: number[]): number {
  let acc = 0;

  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  for (let i = 0; i < seats.length; i++) {
    acc += Math.abs(students[i] - seats[i]);
  }

  return acc;
}

import { Date } from "../types/types";

function generateDates() {
  let dates: Date[] = [];
  for (let i = 1; i < 29; i++) {
    let date: Date = { day: i };
    dates.push(date);
  }
  return dates;
}

export const monthDates = generateDates();

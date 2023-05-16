// Check if a date is after another date
export function isAfter(date1, date2) {
  return date1.getTime() > date2.getTime();
}

// Check if a date is before another date
export function isBefore(date1, date2) {
  return date1.getTime() < date2.getTime();
}

// Check if a date is between two dates
export function isBetween(date, startDate, endDate) {
  if (startDate && endDate) {
    return (
      date.getTime() >= startDate.getTime() &&
      date.getTime() <= endDate.getTime()
    );
  }
  return false;
}

// Check if a date is StartDate

export function isStart(date, startDate) {
  if (startDate) {
    return date.getTime() === startDate.getTime();
  }
  return false;
}

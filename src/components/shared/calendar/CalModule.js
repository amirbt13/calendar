import React, { useEffect, useState } from "react";
// css
import styles from "./CalModule.module.css";
// components
import Day from "./Day";
// helper functions
import { isBetween } from "../functions";

const CalModule = ({ date, months, startEnd, setStartEnd }) => {
  // days of the main month
  const [days, setDays] = useState([]);
  // calculating how many days this month have
  const thisMonthsDaysNum = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  // creating days of this month
  let thisMonthsDays = [];
  for (let i = 1; i <= thisMonthsDaysNum; i++) {
    thisMonthsDays.push({
      id: i,
      dayNum: i,
      fullDate: new Date(date.getFullYear(), date.getMonth(), i),
      selected:
        isBetween(
          new Date(date.getFullYear(), date.getMonth(), i),
          startEnd.start,
          startEnd.end
        ) ||
        new Date(date.getFullYear(), date.getMonth(), i).getTime() ===
          startEnd.start?.getTime()
          ? true
          : false,
      today:
        date.getDate() === i && date.getMonth() === new Date().getMonth()
          ? true
          : false,
    });
  }
  // calculating wich day of the week is 1st of this month
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  // calculating date of the last day of previous month
  const lastMonthDaysNum = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  // creating days of the last month wich will be shown before 1st of this month
  let lastMonthDays = [];
  for (let x = firstDayOfMonth; x > 0; x--) {
    lastMonthDays.push(lastMonthDaysNum - x + 1);
  }
  // calculating wich day of week is last day of this month
  const nextMonthFirstDayNum = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getDay();
  // creating days of next month wich will be shown after last day of this month
  const nextMonthDay = 7 - nextMonthFirstDayNum;
  let nextMonthDays = [];
  for (let j = 1; j <= nextMonthDay; j++) {
    nextMonthDays.push(j);
  }
  // when month change thisMonthsDays will create and will be set into Days state
  useEffect(() => {
    setDays([...thisMonthsDays]);

    // eslint-disable-next-line
  }, [date.getMonth()]);

  return (
    <div className={styles.days}>
      <div className={styles.month}>
        <h4>{months[date.getMonth()]}</h4>
      </div>
      <div className={styles.week_days}>
        <div>Son</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={styles.number_divs}>
        {/* { previos month's days} */}
        {lastMonthDays.map((day) => (
          <div key={day} className={styles.prev_days}>
            {day}
          </div>
        ))}
        {/* { this month's days} */}
        {days.map((day) => (
          <Day
            key={day.id}
            day={day}
            days={days}
            setDays={setDays}
            setStartEnd={setStartEnd}
            startEnd={startEnd}
          />
        ))}
        {/* { next month's days} */}
        {nextMonthDays.map((day) => (
          <div key={day} className={styles.next_days}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalModule;

import React, { useEffect, useState } from "react";
import styles from "./CalModule.module.css";
import Day from "./Day";

const CalModule = ({ date, months, selectedDays, setSelectedDays }) => {
  const [days, setDays] = useState([]);

  const thisMonthsDaysNum = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let thisMonthsDays = [];
  for (let i = 1; i <= thisMonthsDaysNum; i++) {
    thisMonthsDays.push({
      id: i,
      dayNum: i,
      fullDate: new Date(date.getFullYear(), date.getMonth(), i).toString(),
      notes: [],
      selected:
        selectedDays.findIndex(
          (item) =>
            item.fullDate ===
            new Date(date.getFullYear(), date.getMonth(), i).toString()
        ) === -1
          ? false
          : true,
      today:
        date.getDate() === i && date.getMonth() === new Date().getMonth()
          ? true
          : false,
    });
  }

  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastMonthDaysNum = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  let lastMonthDays = [];
  for (let x = firstDayOfMonth; x > 0; x--) {
    lastMonthDays.push(lastMonthDaysNum - x + 1);
  }
  const nextMonthFirstDayNum = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getDay();
  const nextMonthDay = 7 - nextMonthFirstDayNum;
  let nextMonthDays = [];
  for (let j = 1; j <= nextMonthDay; j++) {
    nextMonthDays.push(j);
  }

  useEffect(() => {
    setDays([...thisMonthsDays]);

    // eslint-disable-next-line
  }, [date.getMonth()]);
  //   console.log(days);
  console.log(selectedDays);

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
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            day={day}
            days={days}
            setDays={setDays}
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

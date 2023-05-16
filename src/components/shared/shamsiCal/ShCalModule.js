import React, { useState, useEffect } from "react";
import styles from "./ShCalModule.module.css";
import jalaali from "jalaali-js";
import Day from "../calendar/Day";
import { isBetween } from "../functions";

const ShCalModule = ({ date, months, startEnd, setStartEnd, orgDate }) => {
  const [days, setDays] = useState([]);
  // calculating how many days this month have
  const thisMonthsDaysNum = jalaali.jalaaliMonthLength(date.jy, date.jm);
  // calculating how many days previous month have
  const lastMonthsDaysNum = jalaali.jalaaliMonthLength(date.jy, date.jm - 1);
  // return first Saturday of this month
  const firstSatOfMonth = jalaali.jalaaliWeek(date.jy, date.jm, 1);

  // creating days of the last month wich will be shown before 1st of this month
  let lastMonthDays = [];
  for (let i = firstSatOfMonth.saturday.jd; i <= lastMonthsDaysNum; i++) {
    lastMonthDays.push(i);
  }

  // creating days of this month
  let thisMonthsDays = [];
  for (let i = 1; i <= thisMonthsDaysNum; i++) {
    thisMonthsDays.push({
      id: i,
      dayNum: i,
      fullDate: jalaali.jalaaliToDateObject(date.jy, date.jm, i),
      selected: isBetween(
        jalaali.jalaaliToDateObject(date.jy, date.jm, i),
        startEnd.start,
        startEnd.end
      )
        ? true
        : false,
      today:
        jalaali.toJalaali(new Date()).jy === date.jy &&
        jalaali.toJalaali(new Date()).jm === date.jm &&
        jalaali.toJalaali(new Date()).jd === i
          ? true
          : false,
    });
  }
  // when month change thisMonthsDays will create and will be set into Days state
  useEffect(() => {
    setDays([...thisMonthsDays]);
    // eslint-disable-next-line
  }, [date.jm]);

  return (
    <div className={styles.days}>
      <div className={styles.month}>
        <h4>{months[date.jm - 1]}</h4>
      </div>
      <div className={styles.week_days}>
        <div>ش</div>
        <div>ی</div>
        <div>د</div>
        <div>س</div>
        <div>چ</div>
        <div>پ</div>
        <div>ج</div>
      </div>
      <div className={styles.number_divs}>
        {lastMonthDays.map((item) => (
          <div key={item} className={styles.prev_days}>
            {item}
          </div>
        ))}
        {days.map((day) => (
          <Day
            key={day.id}
            day={day}
            days={days}
            setDays={setDays}
            startEnd={startEnd}
            setStartEnd={setStartEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default ShCalModule;

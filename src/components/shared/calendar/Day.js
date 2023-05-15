import React from "react";
import styles from "./CalModule.module.css";

const Day = ({ day, days, setDays, selectedDays, setSelectedDays }) => {
  const { dayNum, today, selected, fullDate } = day;
  const changeDay = () => {
    const selectedIndex = selectedDays.findIndex(
      (item) => item.fullDate === fullDate
    );
    if (selectedIndex !== -1) {
      const newSelected = selectedDays.filter(
        (item) => item.fullDate !== fullDate
      );
      setSelectedDays([...newSelected]);
      console.log("true");
    } else {
      setSelectedDays((prev) => [...prev, day]);
    }

    const index = days.findIndex((item) => item.fullDate === fullDate);
    days[index].selected = !days[index].selected;
    setDays([...days]);
  };
  return (
    <div
      onClick={changeDay}
      className={
        selected && today
          ? styles.selected && styles.today
          : selected
          ? styles.selected
          : today
          ? styles.today
          : null
      }
    >
      {dayNum}
    </div>
  );
};

export default Day;

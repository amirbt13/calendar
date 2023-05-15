import React from "react";
import CalModule from "../../shared/calendar/CalModule";

const LeftCal = ({ date, months, selectedDays, setSelectedDays }) => {
  return (
    <CalModule
      months={months}
      date={date}
      selectedDays={selectedDays}
      setSelectedDays={setSelectedDays}
    />
  );
};

export default LeftCal;

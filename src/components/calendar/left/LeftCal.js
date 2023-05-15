import React from "react";
import CalModule from "../../shared/calendar/CalModule";

const LeftCal = ({ date, months, startEnd, setStartEnd }) => {
  return (
    <CalModule
      months={months}
      date={date}
      startEnd={startEnd}
      setStartEnd={setStartEnd}
    />
  );
};

export default LeftCal;

import { useState } from "react";
// css
import "./App.css";
// components
import Calendar from "./components/calendar/Calendar";
import Head from "./components/head/Head";
import Foot from "./components/foot/Foot";
import ShamsiCalendar from "./components/shamsiCal/ShamsiCalendar";

function App() {
  const [date, setDate] = useState(new Date());
  const [calType, setCalType] = useState({ miladi: false, shamsi: true });
  const [startEnd, setStartEnd] = useState({
    start: null,
    end: null,
  });
  console.log(startEnd);

  return (
    <div className="App">
      <Head
        setDate={setDate}
        calType={calType}
        setCalType={setCalType}
        startEnd={startEnd}
      />
      {calType.miladi && (
        <Calendar
          date={date}
          setDate={setDate}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
      )}
      {calType.shamsi && (
        <ShamsiCalendar
          date={date}
          setDate={setDate}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
      )}

      <Foot startEnd={startEnd} />
    </div>
  );
}

export default App;

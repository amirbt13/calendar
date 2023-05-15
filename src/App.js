import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import Head from "./components/head/Head";
import Foot from "./components/foot/Foot";

function App() {
  const [date, setDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="App">
      <Head setDate={setDate} />
      <Calendar months={months} date={date} setDate={setDate} />
      <Foot />
    </div>
  );
}

export default App;

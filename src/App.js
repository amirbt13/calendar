import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import Head from "./components/head/Head";
import Foot from "./components/foot/Foot";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Head setDate={setDate} />
      <Calendar date={date} setDate={setDate} />
      <Foot />
    </div>
  );
}

export default App;

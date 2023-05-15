import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import Head from "./components/head/Head";
import Foot from "./components/foot/Foot";

function App() {
  const [date, setDate] = useState(new Date());
  const [calType, setCalType] = useState({ miladi: false, shamsi: true });

  return (
    <div className="App">
      <Head setDate={setDate} calType={calType} setCalType={setCalType} />
      <Calendar date={date} setDate={setDate} />
      <Foot />
    </div>
  );
}

export default App;

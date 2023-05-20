import { useState } from "react";
import { MyBalance } from "./components/MyBalance";
import { Bars } from "./components/Bars";
import { MonthStats } from "./components/MonthStats";
import "./style.css";

export default function App() {
  const [monthTotal, setMonthTotal] = useState(0);

  return (
    <>
      <main className="expenses-chart | container content-flow">
        <MyBalance />

        <div className="spending | content-flow">
          <h1 className="title">Spending - Last 7 days</h1>
          <Bars setMonthTotal={setMonthTotal} />
          <MonthStats monthTotal={monthTotal} />
        </div>
      </main>
    </>
  );
}

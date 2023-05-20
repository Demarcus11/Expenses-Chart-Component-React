import CountUp from "react-countup";

export function MonthStats({ monthTotal }) {
  return (
    <div className="spending__month-stats | flex-group">
      <div>
        <p className="month-stats__title">Total this month</p>
        <span className="month-stats__amount">
          <CountUp
            end={monthTotal}
            duration={2.5}
            separator=","
            decimal="."
            prefix="$"
            decimals={2}
          />
        </span>
      </div>

      <div>
        <span className="month-stats__percentage">
          +
          <CountUp
            end={2.4}
            duration={2.5}
            separator=","
            decimal="."
            prefix="$"
            decimals={2}
          />
          %
        </span>
        <p className="month-stats__title">from last month</p>
      </div>
    </div>
  );
}

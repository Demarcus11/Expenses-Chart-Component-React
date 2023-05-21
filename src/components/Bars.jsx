import { useState, useEffect } from "react";
import jsonData from "../../data.json";

export function Bars({ setMonthTotal }) {
  const [activeBars, setActiveBars] = useState([]);
  const [currentHoveredBar, setCurrentHoveredBar] = useState(null);
  const [currentFocusedBar, setCurrentFocusedBar] = useState(null);
  const [currentDay, setCurrentDay] = useState("");

  const handleClick = (barId) => {
    setActiveBars((prevActiveBars) => {
      // If the clicked bar is already active, remove it from the activeBars array
      if (prevActiveBars.includes(barId)) {
        return prevActiveBars.filter((id) => id !== barId);
      }
      // Otherwise, add the clicked bar to the activeBars array
      return [...prevActiveBars, barId];
    });
  };

  const handleMouseEnter = (barId) => {
    setCurrentHoveredBar(barId);
  };

  const handleMouseLeave = (barId) => {
    if (activeBars.includes(barId)) {
      return;
    } else {
      setCurrentHoveredBar(null);
    }
  };

  const handleFocus = (barId) => {
    setCurrentFocusedBar(barId);
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < jsonData.length; i++) {
      total += jsonData[i].amount;
    }
    setMonthTotal(total);

    // Get current day of the week

    // This code will run when the component mounts
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    // returns a number represents the day of the week 0-6
    const currentDayIndex = new Date().getDay();
    // get the day name by using our days array and plugging in the index of the current day
    const currentDayOfWeek = days[currentDayIndex];
    setCurrentDay(currentDayOfWeek);
  }, []);

  useEffect(() => {
    // This code will run once it hits midnight everyday

    // Update current day of the week every day at midnight
    const interval = setInterval(() => {
      const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      const currentDayIndex = new Date().getDay();
      const currentDayOfWeek = days[currentDayIndex];
      setCurrentDay(currentDayOfWeek);
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(currentHoveredBar);
  console.log(currentFocusedBar);

  return (
    <ol className="spending__bar-chart | flex-group">
      {jsonData.map((item) => (
        <li
          key={item.day}
          role="button"
          onClick={() => handleClick(item.day)}
          onMouseOver={() => handleMouseEnter(item.day)}
          onMouseOut={() => handleMouseLeave(item.day)}
          onFocus={() => handleFocus(item.day)}
        >
          <div
            tabIndex={0}
            className={`bar ${
              activeBars.includes(item.day) || item.day === currentDay
                ? "active"
                : ""
            }`}
            style={{
              height: `${item.amount * 3}px`,
            }}
            id={item.day}
          ></div>
          <span>{item.day.substring(0, 3)}</span>
          <span
            className={`bar-amount ${
              activeBars.includes(item.day) || item.day === currentDay
                ? "show"
                : "" || currentHoveredBar === item.day
                ? "show"
                : "" || currentFocusedBar === item.day
                ? "show"
                : ""
            }`}
          >
            ${item.amount.toFixed(2)}
          </span>
        </li>
      ))}
    </ol>
  );
}

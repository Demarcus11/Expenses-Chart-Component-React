# Frontend Mentor - Expenses chart component

![Design preview for the Expenses chart component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a decent understanding of HTML, CSS and JavaScript.**

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Desktop](./screenshot.jpg)
![Mobile](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

continuously getting the current day of the week

```js
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
```

Getting data from a json file and adding elements based on the number of objects in the json file

```js
import jsonData from "../../data.json";

{
  jsonData.map((item) => (
    <li key={item.day}>
      <button
        className={`button`}
        onClick={() => handleClick(item.day)}
        onMouseOver={() => handleMouseEnter(item.day)}
        onMouseOut={() => handleMouseLeave(item.day)}
      >
        <div
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
        <label htmlFor={item.day}>{item.day.substring(0, 3)}</label>
      </button>

      <span
        className={`bar-amount ${
          activeBars.includes(item.day) || item.day === currentDay
            ? "show"
            : "" || currentHoveredBar === item.day
            ? "show"
            : ""
        }`}
      >
        ${item.amount.toFixed(2)}
      </span>
    </li>
  ));
}
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)

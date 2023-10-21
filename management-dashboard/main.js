const timeElem = document.getElementById("time");
const dateElem = document.getElementById("date");

const monthNames = [
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

const renderDateTime = () => {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");

  const currentDay = now.getDate();
  const currentMonth = now.getMonth();
  const timeText = `${h}:${m}`;
  timeElem.textContent = timeText;
  const dateText = `${currentDay} ${monthNames[currentMonth]}`;
  dateElem.textContent = dateText;
};

const intervalClock = () => {
  setInterval(() => {
    renderDateTime();
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  renderDateTime();
  intervalClock();
});

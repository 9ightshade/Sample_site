const currentDay = document.getElementById('currentDay');
const currentTimeUTC = document.getElementById('currentTimeUTC');


const timeUpdate = () => {
  let time = new Date();
  time ? currentTimeUTC.textContent = time.toLocaleTimeString() : null
};

setInterval(
  () => {
    timeUpdate()
  }, 1000
)


const updateFunction = () => {
  const date = new Date();

  const dayFunction = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
    
    date ? currentDay.textContent = daysOfWeek[date.getDay()]: null
}
  dayFunction()

}

updateFunction()
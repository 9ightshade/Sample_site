const currentDay = document.getElementById('currentDay');
const currentTimeUTC = document.getElementById('currentTimeUTC');

console.log(currentTimeUTC.textContent, currentDay.textContent);



function updateTime() {
  const date = new Date();
  currentDay

  

  date? currentDay.textContent = date.toLocaleDateString(): null


date ? currentTimeUTC.textContent = date.toLocaleTimeString(): null


}


updateTime()
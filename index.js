const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
]

const today= new Date()
let dayOfTheWeek= days[today.getDay()]
document.getElementById("currentDayOfTheWeek").textContent = dayOfTheWeek;

const addZero = (time) => {
    if (time < 10) {time = "0" + time}
  return time;
}

let h = addZero(today.getUTCHours())
let m = addZero(today.getUTCMinutes())
let s = addZero(today.getUTCSeconds())
let time = `${h}:${m}:${s}`
document.getElementById("currentUTCTime").textContent = time;
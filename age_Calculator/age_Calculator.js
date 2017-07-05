var ageYears = prompt("How many years old are you?");
var ageDays = ageYears * 365.25;
var totalDays = "you have been alive "+ ageDays + " days.";
console.log(totalDays);
document.getElementById("answer").innerHTML = totalDays;
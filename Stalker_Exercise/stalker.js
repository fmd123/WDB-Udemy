var userFirst = prompt("What is your first name?");
var userLast = prompt("What is your last name?");
var userAge = prompt("What is your age?");
var sent1 = "Your name is " + userFirst +" " + userLast +".";
var sent2 = "Your age is "+ userAge + ".";
document.getElementById("sentence1").innerHTML = sent1;
document.getElementById("sentence2").innerHTML = sent2;

console.log(sent1);
console.log(sent2);
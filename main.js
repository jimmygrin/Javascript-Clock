$(document).ready(function(){

function clock() {
var current = new Date ();
var hours = current.getHours();
var minutes = current.getMinutes();
var seconds = current.getSeconds();

console.log(hours,minutes,seconds)


}

setInterval(clock, 1000)







})

// document.getElementById("clock")
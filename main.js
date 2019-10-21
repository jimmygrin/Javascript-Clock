$(document).ready(function(){


function clock() {
var current = new Date ();
var hours = current.getHours();
var minutes = current.getMinutes();
var seconds = current.getSeconds();
var ampm= "am"

if (seconds < 10) {
    seconds='0'+seconds
} else {
    seconds=seconds
}

if (hours == 0) {
    hours = 12
} 

if (hours > 12) {
    hours = hours - 12;
    ampm = "pm"
}

if (hours < 10) {
    hours = "0" + hours
}

if (minutes < 10) {
    minutes = "0" + minutes
}


var newtime = hours +':'+minutes+':'+seconds + " "+ ampm






$("#clock").html(newtime)
}

setInterval(clock, 1000)







})


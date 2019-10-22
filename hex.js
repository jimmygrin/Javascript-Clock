$(document).ready(function(){



    function hexbox(){
    var current = new Date();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var seconds = current.getSeconds();

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    if (minute < 10) {
        minute = '0' + minute
    }

    if (hour < 10) {
        hour = '0' + hour
    }
    var hex = "#"+hour +""+ minute +""+ seconds


    $("#hexbox").html(hex)
}

function hexcolor(hex){
    document.body.bgcolor=hex;
    // document.querySelector(#hexbox).bgColor = hex;
}

setInterval(hexbox,1000)
















})
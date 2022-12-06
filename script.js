
breakout = false

function timer2m(){
    var sec = 120;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function timer6m(){
    var sec = 360;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
				if (breakout == true) {
					return;
				}
    }, 1000);
}
function timer1m(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function timer3m(){
    var sec = 180;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function timer10m(){
    var sec = 600;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function endtime() {
	var breakout = true
}

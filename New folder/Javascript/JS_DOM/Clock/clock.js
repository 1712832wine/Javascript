setInterval(() => {
    var date = new Date();
    var time = date.toLocaleTimeString().split(":");
    document.querySelector("#myclock .hour").innerHTML = time[0];
    document.querySelector("#myclock .min").innerHTML = time[1];
    document.querySelector("#myclock .sec").innerHTML = time[2];

}, 1000);


var mytime = {
    hour: 0,
    min: 0,
    sec: 0,
    milisec: 0
}
var end = 0;
var start;

function Start() {
    start = setInterval(() => {
        mytime.milisec++;
        if (mytime.milisec >= 10) {
            mytime.sec++;
            mytime.milisec -= 10;
        }
        if (mytime.sec >= 60) {
            mytime.min++;
            mytime.sec -= 60;
        };
        if (mytime.min >= 60) {
            mytime.hour++;
            mytime.min -= 60;
        };
        if (mytime.hour > 9) document.querySelector("#myclock2 .hour").innerHTML = mytime.hour;
        else document.querySelector("#myclock2 .hour").innerHTML = ('0' + mytime.hour);

        if (mytime.min > 9) document.querySelector("#myclock2 .min").innerHTML = mytime.min;
        else document.querySelector("#myclock2 .min").innerHTML = ('0' + mytime.min);

        if (mytime.sec > 9) document.querySelector("#myclock2 .sec").innerHTML = mytime.sec;
        else document.querySelector("#myclock2 .sec").innerHTML = ('0' + mytime.sec);
        //milisec
        document.querySelector("#myclock2 .milisec").innerHTML = (mytime.milisec + "00");
    }, 100);
}

function End() {
    //clear interval
    clearInterval(start);
}

function Restart() {
    End();
    mytime.hour = 0;
    mytime.min = 0;
    mytime.sec = 0;
    mytime.milisec = 0;
    document.querySelector("#myclock2 .hour").innerHTML = "00";
    document.querySelector("#myclock2 .min").innerHTML = "00";
    document.querySelector("#myclock2 .sec").innerHTML = "00";
    document.querySelector("#myclock2 .milisec").innerHTML = "000";
}
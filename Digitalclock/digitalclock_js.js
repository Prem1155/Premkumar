const clock = document.querySelector(".clock");

function runtime() {

    let hrs  = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let txt  = "PM";

    hrs  = hrs  < 10 ? "0" + hrs  : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    if (hrs > 12) {
        hrs = hrs - 12;
        txt = "PM";
    }
    else if (hrs == 0) {
        hrs = 12;
        txt = "AM";
    }

    clock.innerHTML = (`${hrs} : ${mins} : ${secs} ${txt}`);
}
s
runtime();
setInterval(runtime, 1000);


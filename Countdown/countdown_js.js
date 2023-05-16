const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mintues");
const secs = document.querySelector("#seconds");

  function updatetime() {
    const currentyear = new Date().getFullYear();
    const newyear = new Date(`january 1 ${currentyear + 1} 00:00:00`);

    const currentdate = new Date();
    const diff = newyear - currentdate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    days.innerHTML=d<10? "0"+d:d;
    hours.innerHTML=h<10? "0"+h:h;
    mins.innerHTML=m<10? "0"+m:m;
    secs.innerHTML=s<10? "0"+s:s;
    console.log(d+" "+h+" "+m+" "+s);


}

setInterval(updatetime,1000);

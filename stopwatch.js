const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");
let interval;

let tens = "00";
let seconds = "00";
let minutes = "00";

stop.onclick = ()=>{
    clearInterval(interval);
}

reset.onclick = ()=>{
    clearInterval(interval);

    tens = "00";
    seconds = "00";
    minutes = "00";
    min.innerHTML= minutes;
    sec.innerHTML= seconds;
    mili.innerHTML= tens;
}

start.onclick = ()=>{
    clearInterval(interval);
    interval = setInterval(() => {
        tens++;
        if(tens <=9){
            mili.innerHTML = "0"+ tens;
        }

        if(tens >9){
            mili.innerHTML =  tens;
        }

        if(tens >99){
            seconds++;
            sec.innerHTML =  "0"+seconds;
            tens = 0;
            mili.innerHTML = "0"+tens;
        }
        if(seconds >9){
            sec.innerHTML = seconds;
        }

        if(seconds >59){
            minutes++;
            min.innerHTML = "0"+minutes;
            tens = 0;
            seconds = 0;
            mili.innerHTML = "0"+tens;
            sec.innerHTML = "0"+seconds;
        }
        
    }, 10);
}


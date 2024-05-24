let hour=0,min=0,sec=0;
let display=document.getElementById("display");
let timer=null;
function stopwatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hour++;
        }
    }
    let h= hour<10 ? "0"+hour:hour;
    let m= min<10 ? "0"+min:min;
    let s= sec<10 ? "0"+sec:sec;
    display.innerHTML=h+":"+m+":"+s;
}
function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    hour=0,min=0,sec=0;
    display.innerHTML="00:00:00";
}
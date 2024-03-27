let seconds = 00;
let tens = 00;
let mins = 00;
let getSeconds=document.querySelector('.seconds');
let getTens=document.querySelector('.tens');
let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');
let getMins = document.querySelector('.mins');
let stop;

btnStart.addEventListener('click',()=>{
    clearInterval(stop);
    stop=setInterval(startTime,10)
})
btnStop.addEventListener('click',()=>{
    clearInterval(stop);
})
btnReset.addEventListener('click',()=>{
    clearInterval(stop);
    tens = '00';
    seconds='00';
    mins = '00';
    getSeconds.innerHTML=seconds;
    getTens.innerHTML=tens;
    getMins.innerHTML=mins;
})

function startTime(){
    tens++;
    if(tens<=9){
        getTens.innerHTML='0'+tens;
    }
    if(tens>9){
        getTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        getSeconds.innerHTML='0'+seconds;
        tens=0;
        getTens.innerHTML='0'+0;
    }
    if(seconds>9){
        getSeconds.innerHTML=seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }

}
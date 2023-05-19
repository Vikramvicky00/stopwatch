const display=document.getElementById("timeDisplay")
const ms=document.querySelector("#ms")
const minute=document.querySelector("#minute")
const second=document.querySelector("#second")
const hour=document.querySelector("#hour")

const startBtn=document.querySelector("#startbtn")
const pauseBtn=document.querySelector("#pausebtn")
const resetBtn=document.querySelector("#resetbtn")

let startTime=0;
let interval;
let elapseTime=0;
let sec,hrs,min;
let paused=false;
let msec=0;

startBtn.addEventListener("click",()=>{
 if(!paused){
   startTime=Date.now()-elapseTime;
   interval=setInterval(update,75)
 }
})

pauseBtn.addEventListener("click",()=>{
    paused=false;
    elapseTime=Date.now()-startTime
    clearInterval(interval)

})

resetBtn.addEventListener("click",()=>{
   paused=false;
   clearInterval(interval)
   startTime=0;
   elapseTime=0;
   sec=0
   hrs=0
   min=0
   msec=0
   hour.textContent=`00:`
   minute.textContent=`00:`
   second.textContent=`00`
   ms.textContent=`000`
})

function update(){
    
    elapseTime=Date.now()-startTime

    sec=Math.floor((elapseTime/1000)%60)
    min=Math.floor((elapseTime/(1000*60))%60)
    hrs=Math.floor((elapseTime/(1000*60*60))%60)
    msec=elapseTime%1000
    
    sec=pad(sec)
    min=pad(min)
    hrs=pad(hrs)
    
    function pad(unit){
        return ("0"+unit).length>2 ? unit  : "0"+ unit
    }
     
    hour.textContent=`${hrs}:`
    minute.textContent=`${min}:`
    second.textContent=`${sec}`
    ms.textContent=`${msec}`
   
}
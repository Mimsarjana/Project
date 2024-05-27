function displayClock(){
    const time=new Date();
    const formatedTime= time.toLocaleTimeString("en-US")
    const clock=document.getElementById("clock");
    clock.innerText=formatedTime;
}
setInterval(displayClock, 1000);
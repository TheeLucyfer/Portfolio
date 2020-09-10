let header;
window.addEventListener("load", (ev)=>{
    header = document.querySelector(".header");
    initBurnDownTimer();
})



window.addEventListener("scroll", (ev) =>{
    if (!header)
        return;
    let viewHeight = window.innerHeight;
    let scrollY = window.scrollY;
    let headerHeight = header.offsetHeight;

    if(viewHeight -headerHeight <= scrollY){  
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled")
    }
})


function initBurnDownTimer() {
    setTimeout(spawnBurnButton, 1500)
}

function spawnBurnButton(){
    let burnButton = document.querySelector(".burnButton")
    burnButton.classList.add("show")
    burnButton.addEventListener("click", burnItDown)
}

function burnItDown(){
    document.body.classList.remove("showOld")
    let burnButton = document.querySelector(".burnButton")
    burnButton.classList.remove("show")
    let fireSound = document.querySelector("#fireAudio")
    fireSound.volume = 0.2
    fireSound.play()
}
let header;
window.addEventListener("load", (ev)=>{
    header = document.querySelector(".header")
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
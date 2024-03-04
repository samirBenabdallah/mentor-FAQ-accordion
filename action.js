const SHOW_BARS = document.querySelectorAll(".show-bar");
const REPONSE = document.getElementsByClassName("reponse");
const icons = document.getElementsByClassName("show-bar-icon");
(function () {
    for(let i=0 ; i<SHOW_BARS.length ; i++)
        SHOW_BARS[i].addEventListener("click",()=>{hide_hsow(i)})
    hide_hsow(0);
}())
function hide_hsow (num){
    for(let i=0 ; i<REPONSE.length ; i++){
        REPONSE[i].style.display = "none";
        icons[i].src = './assets/images/icon-plus.svg'
        
    }
    REPONSE[num].style.display = "block";
    icons[num].src = './assets/images/icon-minus.svg'
}
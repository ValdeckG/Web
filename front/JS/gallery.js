const btnTheme = document.querySelector('.btn-theme')
const fullContent = document.querySelector('.full-content')
let isDarkOn = true
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 600}px)`;
}

btnTheme.addEventListener('click',()=> {
    isDarkOn = !isDarkOn
    if(isDarkOn) {
        fullContent.style.backgroundColor = "#2c282a"
        
        return
    }
    fullContent.style.backgroundColor = "white"
    
}) 

setInterval(carrossel, 1800);
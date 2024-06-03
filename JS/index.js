const btnTheme = document.querySelector('.btn-theme')
const fullContent = document.querySelector('.full-content')
const sectionContent = document.querySelector('.section-content')
let isDarkOn = true
const query = {
    get(element) {
        return document.querySelector(element)
    }
}

const title = query.get('.typing')
const titleArray = title.innerHTML.split('')

const init = () => {
    titleTyping(titleArray)
}

const titleTyping = (array) => {
    title.innerHTML = ''

    array.map((item, i) => {
        setTimeout(() => {
            title.innerHTML += item
        }, 100 * i);
    })
}
btnTheme.addEventListener('click',()=> {
    isDarkOn = !isDarkOn
    if(isDarkOn) {
        fullContent.style.backgroundColor = "#2c282a"
        sectionContent.style.backgroundColor = "#2c282a"
        sectionContent.style.color = "white" 
        return
    }
    fullContent.style.backgroundColor = "white"
    sectionContent.style.backgroundColor = "white"
    sectionContent.style.color = "black"
}) 

init()

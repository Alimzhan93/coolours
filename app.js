const cols = document.querySelectorAll('.col');
const btn = document.querySelector('.btn')

document.addEventListener('keydown', (Event) =>{
    if(Event.code.toLocaleLowerCase() === 'space'){
        setRandomColors()
    
    }
})


// меняет цвет по клику
btn.addEventListener('click', () =>{
    function setRandomColors(){
        cols.forEach((col) => {
            const text = col.querySelector('h2')
            const color = chroma.random()
            text.textContent = color
            col.style.background = color
            btn.style.background = color
            setTextColor(text, color)
        })
    }
    setRandomColors()

})

//меняет цвета рамдомно
function gerenerateRandomColor(){
    // RBG
    // #FF0000
    // #00FF00
    // #0000FF
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color +=[Math.floor(Math.random() * hexCodes.length) ]
        
    }
    return '#' + color
}


function setRandomColors(){
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()
        
        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}
setRandomColors()

function setTextColor(text, color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}


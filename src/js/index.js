const colorChangerR = document.getElementById('r')
const colorChangerG = document.getElementById('g')
const colorChangerB = document.getElementById('b')

const redSquere = document.querySelector('.color .red')
const greenSquere = document.querySelector('.color .green')
const blueSquere = document.querySelector('.color .blue')

const rInfo = document.getElementById('r-info')
const gInfo = document.getElementById('g-info')
const bInfo = document.getElementById('b-info')

const resetButton = document.getElementById('reset')

resetButton.addEventListener('click', function() {
    window.location.reload()
})

console.log(colorChangerR)

colorChangerR.addEventListener('change', function() {
    console.log({R: colorChangerR.value})
    document.body.style.backgroundColor = `rgb(${colorChangerR.value}, ${colorChangerG.value}, ${colorChangerB.value}`
    rInfo.textContent = ` : ${colorChangerR.value}`
    redSquere.style.backgroundColor = `rgb(${colorChangerR.value}, 0, 0)`
})

colorChangerG.addEventListener('change', function() {
    console.log({G: colorChangerG.value})
    document.body.style.backgroundColor = `rgb(${colorChangerR.value}, ${colorChangerG.value}, ${colorChangerB.value}`
    gInfo.textContent = ` : ${colorChangerG.value}`
    greenSquere.style.backgroundColor = `rgb(0, ${colorChangerG.value}, 0)`
})

colorChangerB.addEventListener('change', function() {
    console.log({B: colorChangerB.value})
    document.body.style.backgroundColor = `rgb(${colorChangerR.value}, ${colorChangerG.value}, ${colorChangerB.value}`
    bInfo.textContent = ` : ${colorChangerB.value}`
    blueSquere.style.backgroundColor = `rgb(0, 0, ${colorChangerB.value})`
})



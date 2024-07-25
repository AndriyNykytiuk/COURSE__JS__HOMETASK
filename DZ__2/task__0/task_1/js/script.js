let firstNumber = parseFloat(prompt('введіть перше число','0'))
let nextNumber = parseFloat(prompt('введіть наступне число', '0'))


const KNOWN_NUMBER = 12 // в даному випадку це   постійна велиична


let summury = firstNumber + KNOWN_NUMBER + nextNumber


document.write(`<h2>Сума виразу = ${summury}</h2> <br> <h4>перше число =  ${firstNumber} </h4> <br> <h4> друге число = ${nextNumber}</h4>`)
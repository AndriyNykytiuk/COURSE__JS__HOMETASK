let firstNumA = parseFloat(prompt('введіть число', '0'))
let secondNumB = parseFloat(prompt('введіть наступне число', '0'))

let numerator = firstNumA + secondNumB
let denominator = 2 * firstNumA

let result = Math.sqrt(firstNumA / secondNumB)
document.write(`<h2>результат задачі= ${result}</h2>`)
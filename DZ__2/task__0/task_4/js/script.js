let firstNum = parseFloat(prompt('введіть перше число', '0'))
let secondtNum = parseFloat(prompt('введіть друге число', '0'))

let summary = Math.sin(firstNum/(-secondtNum))
document.write(`<h2>Результат виразу = ${summary.toFixed(2)}</h2>`)
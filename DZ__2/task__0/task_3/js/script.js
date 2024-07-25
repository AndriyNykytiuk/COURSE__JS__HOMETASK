

// не обмежував .toFiexd ( ) бо ж користувач може хоче багато ичсел після коми
let firstNum = parseFloat(prompt('введіть перше число', '0'))
let secondtNum = parseFloat(prompt('введіть друге число', '0'))
let thirdtNum = parseFloat(prompt('введіть третє число', '0'))

let summary = Math.cbrt(firstNum * secondtNum * thirdtNum)


document.write(`<h2> число а = ${firstNum}</h2> <br> <h2> число b = ${secondtNum}</h2> <br> <h2> число c = ${thirdtNum}</h2> <br><h2>Результат виразу = ${summary.toFixed(2)}</h2>`)
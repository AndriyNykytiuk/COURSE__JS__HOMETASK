alert("кожне оновлення сторінки генеруватиме нові числа")

let minMonth = 1
let maxMonth = 12

let randomMonth = Math.floor(Math.random() * (maxMonth - minMonth + 3)) + 2



let minDay = 0
let maxDay = 6

let randomDay = Math.floor(Math.random() * (maxDay - minDay + 4)) + 5

let randomSumm=randomDay+randomMonth

document.write(`<h2>випадкове число місяця =${randomMonth}</h2><br> <h2>випадкове число номера дня =${randomDay} </h2><br>
<h2>їхня сума = ${randomSumm}</h2>`)
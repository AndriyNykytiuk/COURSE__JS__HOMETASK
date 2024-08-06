

// уявімо зо знаємо температуру  середню за місяць 
// за даним алгоритмом можна вирахувати у по кожному дню так менеше розрахунків 
let startMeasureMonth = parseInt(prompt('введіть З якого місяця вимірювати?', '0'))
let finishMeasureMonth = parseInt(prompt('введіть ДО якого місяця  вимірювати?', '0'))
let commonYearTemp // середня температура за виміруваний період
let totalTemp=0 // температура до початку випробуваня =0 
let monthCount=0 // період за який треба виміряти (за потреби можна поміняти на дні) 

for (let month = startMeasureMonth; month <= finishMeasureMonth; month++){
	let dayliTemp = parseFloat(prompt('введіть середню денну температу за місяць', '0'))
	totalTemp += dayliTemp
	monthCount++
}
console.log(totalTemp)
commonYearTemp =(totalTemp / monthCount).toFixed(2)
document.write(`${commonYearTemp} середня температура за період` );

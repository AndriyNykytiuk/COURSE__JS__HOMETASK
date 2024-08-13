
alert('введіть 3 числа для проведення їх обчислень')






	function inspectThreeNumbers() { 
	
	let evenNumber = 0 // рахуємо парні числа 
	let positiveNumber = 0 // рахуємо більші 0 
	let moreThenHundred = 0 // рахуємо більші 100
		
		for (let attempt = 1; attempt < 4; attempt++) {
			let inputNumbers = parseInt(prompt('введіть число  ' + attempt, '0'))
	
		
			if (inputNumbers % 2) {
				console.log(`число не парне рахунок не ведеться`); // виводимо в консоль аби розуміти як робе 
			} else (evenNumber++)
		
			if (inputNumbers > 0) {
				positiveNumber++
			}
			if (inputNumbers > 100) {
				moreThenHundred++
			}
		}
	document.write(`кількість парних = ${evenNumber} <br> кількість додатних = ${positiveNumber} <br> кількість більших за 100 =  ${moreThenHundred}`);

	return (
		evenNumber,
		positiveNumber,
		moreThenHundred
	)

}

inspectThreeNumbers()
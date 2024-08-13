
let inputMonthNumber = parseInt(prompt(' введіть номер місяця', '0'))

function monthReturn(inputMonthNumber) {

	
	if (inputMonthNumber >= 3 && inputMonthNumber <= 5 ) {
		document.write(`весна `);
	}else if (inputMonthNumber >= 6 && inputMonthNumber <= 8 ) {
		document.write(`літо`);
	}else if (inputMonthNumber >= 9 && inputMonthNumber <= 11 ) {
		document.write(`осінь`);
	}else if (inputMonthNumber <= 2 || inputMonthNumber === 12 ) {
		document.write(`зима`);
	}
	else (document.write(`місяців всього 12 такогої пори не існує`))

	return inputMonthNumber
}

monthReturn(inputMonthNumber)
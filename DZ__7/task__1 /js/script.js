let inputMonthNumber = parseInt(prompt('введіть номер місяця ', '0'))


function monthsName(inputMonthNumber) {
	let months
	switch (inputMonthNumber) {
		case 1:
			months = 'січень'
			break
		case 2:
			months = 'лютий'
			break
		case 3:
			months = 'березень'
			break
		case 4:
			months = 'квітень'
			break	
		case 5:
			months = 'травень'
			break
		case 6:
			months = 'червень'
			break
		case 7:
			months = 'липень'
			break
		case 8:
			months = 'серпень'
			break	
		case 9:
			months = 'вересень'
			break
		case 10:
			months = 'жовтень'
			break
		case 11:
			months = 'листопад'
			break													
		case 12:
			months = 'грудень'
			break	
	}
	document.write(`${months}`);
	return months
}

monthsName(inputMonthNumber)


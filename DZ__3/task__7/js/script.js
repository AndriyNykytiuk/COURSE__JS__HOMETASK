
const monthNumber = parseInt(prompt('Введіть номер місяця в році', '0'))


let monthOfYear

switch (monthNumber) {
	case 1: monthOfYear = 'січень'
		break
	case 2: monthOfYear = 'лютий'
		break
	case 3: monthOfYear = 'березень'
		break
	case 4: monthOfYear = 'квітеньь'
		break
	case 5: monthOfYear = 'травень'
		break
	case 6: monthOfYear = 'червеень'
		break	
	case 7: monthOfYear = 'липень'
		break
	case 8: monthOfYear = 'серпень'
		break
	case 9: monthOfYear = 'вересень'
		break
	case 10: monthOfYear = 'жовтень'
		break
	case 11: monthOfYear = 'листопад'
		break	
	case 12: monthOfYear = 'грудень'
}
if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
	document.write(`зима. місяць ${monthOfYear} `)
}
else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
	document.write(`весна.місяць ${monthOfYear}`)
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
	document.write(`літо.місяць ${monthOfYear}`)
}
else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
	document.write(`літо.місяць ${monthOfYear}`)
} 
else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
		document.write(`осінь.місяць ${monthOfYear}`)
}
else {
	document.write(`такого місяця і пори нема`)
}

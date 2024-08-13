

let inputDay = parseInt(prompt('введіть номер дня', '0'))



function getWorkdDay(inputDay) {
	if (inputDay >= 1&&inputDay <= 5){
		document.write(`це робочий день `);
	} else if (inputDay <= 7) {
		document.write(`це вихідний день `);
	} else (document.write(`тиждень має тільки 7 днів`))
	
	return inputDay
}

getWorkdDay(inputDay)
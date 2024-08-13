

let amountMeasures = parseInt(prompt('чкільки показників температури і вас є?', '0'))




function getMinusTemperatureMeasures(amountMeasures) {
	let minusMeasures = 0
	
	for (let temperatureMeasures = 1; temperatureMeasures <= amountMeasures; temperatureMeasures++){
		
		let measures = parseFloat(prompt('введіть значення температури ', '0'))
		
		if (measures <= 0) {
			minusMeasures++
		}else (alert('температура вище 0 тому в не братиме участі в обрахунках'))
	}
	document.write(`кількість показників ниже 0 = ${minusMeasures}`);
	return minusMeasures
}

getMinusTemperatureMeasures(amountMeasures)
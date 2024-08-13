let amountMeasures = parseInt(prompt('чкільки показників температури і вас є?', '0'))


function getMinusTemperatureMeasures(amountMeasures) {

	let umountDegres = 0
	let plusMeasures = 0
	
	for (let temperatureMeasures = 1; temperatureMeasures <= amountMeasures; temperatureMeasures++){
		
		let measures = parseFloat(prompt('введіть значення температури ', '0'))
		
		if (measures > 0) {
			plusMeasures++
			umountDegres+=measures
		}else( alert('введені значеня нижче 0 і не рахуватиметься'))
	}
	let averegeTemp=umountDegres/plusMeasures
	document.write(` середня температура = ${averegeTemp.toFixed(2)}`);
	return averegeTemp
}

getMinusTemperatureMeasures(amountMeasures)
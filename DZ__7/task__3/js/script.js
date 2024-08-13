alert('введіть 4 числа для проведення обчислень')

let numA = parseInt(prompt('введіть 1 число', '0'))
let numB = parseInt(prompt('введіть  2 число', '0'))
let numC = parseInt(prompt('введіть 3 число', '0'))
let numD= parseInt(prompt('введіть 4 число','0'))

function fourNumbersSumm(numA, numB, numC, numD) {
	
	let summNambers = numA+numB+numC+numD
	document.write(`сума чисел = ${summNambers} <br>`);
	
	return summNambers
}
function fourNumbersMultiplay(numA, numB, numC, numD) {

	let multiplayNumbers = numA * numB * numC * numD
	document.write(`добуток чисел = ${multiplayNumbers}<br>`);

	return multiplayNumbers
}

function fourNumbersAverege(numA, numB, numC, numD) {
	let averegeNumbers = (numA + numB + numC + numD) / 4
	document.write(`середнє арифметичне = ${averegeNumbers.toFixed(2)}<br>`);

	return averegeNumbers
}

function fourNumbersLower(numA, numB, numC, numD) {
	let minNum = numA  // уявімо що це найменше число введено з першого разу і далі будемо порівнювати
	
	if (minNum > numB) { 
		minNum=numB
	}
	if (minNum > numC) {
		minNum=numC
	}
	if (minNum > numD) {
		minNum=numD
	}
	document.write(`наймешне число =${minNum}`);
	
	return minNum
}
fourNumbersSumm(numA, numB, numC, numD)
fourNumbersMultiplay(numA, numB, numC, numD)
fourNumbersAverege(numA, numB, numC, numD)
fourNumbersLower(numA, numB, numC, numD)


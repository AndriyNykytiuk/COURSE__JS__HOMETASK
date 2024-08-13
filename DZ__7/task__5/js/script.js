
let inputNumberCM = parseFloat(prompt('введіть число яке треба перевести в дюйми ', '0'))
let inputNumberKG = parseFloat(prompt('введіть число яке треба перевести у фунти ', '0'))
let inputNumberKM = parseFloat(prompt('введіть число яке треба перевести у милі ', '0'))


function inch(inputNumberCM) {

	let transformInch = inputNumberCM * 0.393  // саме таке значення переводить сантиметри у дюйми

	document.write(`${inputNumberCM} см це = ${transformInch.toFixed(2)} дюймів <br> `);

	return transformInch
}

function pound(inputNumberKG) {

	let transformPound = inputNumberKG * 0.453 // саме таке значення переводить сантиметри у фунти

	document.write(`${inputNumberKG} кг це = ${transformPound.toFixed(2)} фунтів <br> `);

	return transformPound
}

function mile(inputNumberKM) {

	let transformMile = inputNumberKM * 0.62 // саме таке значення переводить сантиметри у милі

	document.write(`${inputNumberKM} км це = ${transformMile.toFixed(2)} миль <br> `);

	return transformMile

}

inch(inputNumberCM)
pound(inputNumberKG)
mile(inputNumberKM)
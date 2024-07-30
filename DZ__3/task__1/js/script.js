let firstName = prompt('введіть імʼя першої дитини', '')
let firstChildCandy= parseInt(prompt('введіть кількість цукерок у неї',''))
let secondName = prompt('ввудіть імʼя другої дитини', '')
let secondChildCandy= parseInt(prompt('введіть кількість цукерок у неї',''))


if (firstChildCandy > secondChildCandy) {
	document.write(`<h3>${firstName} має більше цукерок</h3>`)
} else if (firstChildCandy < secondChildCandy) {
	document.write(`<h3>${secondName} має більше цукерок</h3>`)
} else (
	document.write(`<h3> цукерок порівну в обох </h3>`)
)


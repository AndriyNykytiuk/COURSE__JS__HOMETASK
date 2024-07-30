const minNumber = 1
const maxNumber = 5
let userNumber1
let userNumber2

var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

userNumber1 = parseInt(prompt('вгадайте число. введіть число від 1 до 5', '0'))
console.log(randomNumber) // створено аби бачити що генерується і розуміти як робить це все.

	if (userNumber1 === randomNumber) {
	document.write(`вгадано з першої спроби! Ви ввели ${userNumber1}, а random ${randomNumber}`)
} else { userNumber2 = parseInt(prompt('Не вгадали, введіть друге число від 1 до 5', '0'))

		if (userNumber2 === randomNumber) {
			document.write(`вгадано з другої спроби! Ви ввели ${userNumber2}, а random ${randomNumber}`)
		} else {
	document.write(`ви програли, у вас було дві спроби. random число було ${randomNumber}`)
}
}


let inputUserNumbers = parseInt(prompt('введіть кількість випадкових чисел які треба вивести', '0'))

document.write(`<ul>`);
for (let item = 1; item <= inputUserNumbers; item++){

	let randomNum = Math.floor(Math.random() * 99)


	document.write(`<li> ${randomNum}</li>`) //можливо правильніше через ul але маркований список вихоодить теж гадаю в даному контексті то не важливо


	
}
document.write(`</ul>`)
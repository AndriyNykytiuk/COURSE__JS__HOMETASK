alert('введіть діапазон чисел де треба знайти суму 5 непарних чисел ')

let firstUserNumber = parseInt(prompt('введіть перше число', '0'))
let secondUserNumber = parseInt(prompt('введіть друге число', '0'))
let neparneAmount=0
for (ammount = firstUserNumber; ammount <= secondUserNumber; ammount++){
	
	if (ammount % 2) {
		for (let atempt = 1; atempt <= 5; atempt++){

			neparneAmount+=ammount
			
			break
		}
	}
}
console.log(ammount)
document.write(`${neparneAmount}`);

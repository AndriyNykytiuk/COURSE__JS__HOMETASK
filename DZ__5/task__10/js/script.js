alert('Введіть в якому діапазоні чисел треба провести розрахунки з додавання парних і не парних чисел?')

let NeParniSumm = 0
let ParniSumm = 0

let firstUserInput = parseInt(prompt(" від числа:", "0"))
let secondUserInput = parseInt(prompt(" До числа ", "0"))

for (let amount = firstUserInput; amount <= secondUserInput; amount++){
	if (amount % 2) {
		NeParniSumm += amount
	}
	else {
		ParniSumm+=amount
	}
	
}
document.write(`сума не парних чисел =  ${NeParniSumm}   <br>`);
//document.write(`сума парних чисел ${ParniSumm} <br>`); // можливо тре буде потім користувачу то достаньо розкоментувати 
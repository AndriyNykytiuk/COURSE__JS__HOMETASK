let totalLoanSumm = parseFloat(prompt('введіть суму боргу яку хтось повинен погасити', '0'))

let inputLoanSumm  // сума котру оплатив і вводитиме боржник
let loanSum = 0  // загальна сума боргу яку вніс боржник


do {
	inputLoanSumm = parseFloat(prompt('яку суму вносите? ', '0'))

	loanSum += inputLoanSumm

	let balance = (totalLoanSumm - loanSum ).toFixed(2)  // скільки ще хтось виннен 
	
	alert("ще треба " + balance +" грошей") //сповіщаємо скільки ще виннен
	
}while(loanSum<totalLoanSumm)
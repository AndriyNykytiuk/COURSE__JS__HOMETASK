let weeksAmount = parseInt(prompt('введіть кількість тижнів за які треба порахувати прибуток', '0'))
let profitDays=7 // стільки днів у тижню
let totalProfit=0 // виручка


for (let weeks = 1; weeks <= weeksAmount; weeks++) {
	let weekMoney=0 // після сумування виручки  кожного тижня проводимо скидання
	for (let day = 1; day <= profitDays; day++) {

		profit = parseFloat(prompt('скільки грошей заробив сьогодні', '0'))
		weekMoney += profit
			
	}
	document.write(`${weekMoney} грошей за ${weeks} тиждень <br>`);
	totalProfit+=weekMoney	
	
}
		

document.write(`загальна виручка = ${totalProfit} грошей `);


alert("Для обчислення загальної вартості придбаних товарів почергово введіть  кількість придбаного товару та ціну")
// знаходимо кількість та вартість першого товару
let firstItem = parseInt(prompt("Введіть кількість одиниць придбаного товару першого виду", "0"))
let firstPrice = parseFloat(prompt("Введіть ціну за одиницю товару  першого виду", "0"))

let firsSummury = firstItem * firstPrice

// знаходимо кількість та вартість другого товару
let secondItem = parseInt(prompt("Введіть кількість одиниць придбаного товару другого виду", "0"))
let secondPrice = parseFloat(prompt("Введіть ціну за одиницю товару  другого виду", "0"))

let secondSummury = secondItem * secondPrice 

// знаходимо кількість та вартість третього товару
let thirdItem = parseInt(prompt("Введіть кількість одиниць придбаного товару третього виду", "0"))
let thirdPrice = parseFloat(prompt("Введіть ціну за одиницю товару  третього виду", "0"))

let thirdSummury = thirdItem * thirdPrice

// обичслюємо загальну суму

let totalSummury=firsSummury+secondSummury+thirdSummury

// виводимо результат користувачу

document.write(`
		<h3>ЧЕК</h3>
	<ul>
		<li>кількість одиниць першого товару ${firstItem} за ціною ${firstPrice.toFixed(2)} за одиницю. <br> сума=${firsSummury.toFixed(2)}грошей</li>
		<li>кількість одиниць другого товару ${secondItem} за ціною ${secondPrice.toFixed(2)} за одиницю. <br>  сума=    ${secondSummury.toFixed(2)}грошей</li>
		<li> кількість одиниць третього товару ${thirdItem} за ціною ${thirdPrice.toFixed(2)} за одиницю. <br>  сума=${thirdSummury.toFixed(2)} грошей</li>
	</ul>
		<h3>загальна сума до оплати ...... ${totalSummury.toFixed(2)} грошей</h3>
	`
	
)
let parneNum=0
let NeparneNum=0


for (let num = 1; num <= 100;num++){
	let randomNum = Math.floor(Math.random() * 999) //999 згідно формули 1000-1 
	if (randomNum % 2) {// все що не 0 це true тому спочатку рахуємо не парні 
	//	document.write(`ne parne---`) // для розуміння як все відбувалося можна розкоментувати
		NeparneNum++
	}
	else {
	//	document.write(` parne ---`)// для розуміння як все відбувалося можна розкоментувати
		parneNum++
	}
	document.write(`${num} --- ${randomNum} ;<br> `)
	
}

document.write(`  <br>  парних чисел = ${parneNum++} , <br> не парних чисел = ${NeparneNum++} `)





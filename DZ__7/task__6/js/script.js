let inputColumnAmount = parseInt(prompt('введіть кількість стовпчиків?', '0'))
let inputRowAmount = parseInt(prompt('введіть кількість  рядків ', '0'))


function userTable(inputColumnAmount, inputRowAmount) {

	document.write(`<table border='1'>`);
	for (let tableName = 1; tableName <= inputColumnAmount; tableName++){
		let columnName=prompt('введіть назву стовпчика ','')
			document.write(`<th>${columnName}</th>`) 
		}
		for (let row = 1; row <=inputRowAmount; row++){
			document.write(`<tr>  </tr > `);
			for (let cell = 1; cell <= inputColumnAmount; cell++){
				let someInfo = prompt('що писати у комірці рядочка таблиці ?', '0')
				document.write(`<td> ${someInfo}</td>`);
			}
			
		}
	document.write(`</table>`);


}

userTable(inputColumnAmount,inputRowAmount)
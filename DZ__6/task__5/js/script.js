

	let inputUserNum = parseFloat(prompt('Вводьте числа поки не введете 0 і я порахую їхню суму', '0'));
	let summUserInput = 0;
	
	do {
		
		summUserInput += inputUserNum;
		inputUserNum = parseFloat(prompt('Введіть число ', '0'));
	
	}while(inputUserNum>0)
	
	document.write(`${summUserInput}`);

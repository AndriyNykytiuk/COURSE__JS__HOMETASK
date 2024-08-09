

	let inputUserNum = parseFloat(prompt('Введіть число ', '0'));
	let summUserInput = 0;
	
	do {
		
		summUserInput += inputUserNum;
		inputUserNum = parseFloat(prompt('Введіть число ', '0'));
	
	}while(inputUserNum>0)
	
	document.write(`${summUserInput}`);
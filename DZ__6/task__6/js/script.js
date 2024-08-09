let inputPassword = parseInt(prompt(' введіть пароль з двох цифер', '0'));


const PASSWORD = 78;

do {

	alert('пароль не вріний! спробуйте ще ! ')
	
	inputPassword = parseInt(prompt(' введіть пароль з двох цифер', '0'));

}while(inputPassword!==PASSWORD)

alert('пароль вірний! ')

	document.write(`авторизація пройдена `);
	
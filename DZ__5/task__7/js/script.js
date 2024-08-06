let articlsAmount = parseInt(prompt("введіть скільки абзаців треба вивести на екрані?", "0"))

for (let articl = 1; articl <= articlsAmount; articl++){
	document.write(`<h1>Заголовок ${articl}</h1>`);
	for (let sentenses = 1; sentenses <= articl; sentenses++) {
		document.write(`<p>Розділ ${articl}, параграф ${sentenses}</p>`);
		
		
	}
	
}
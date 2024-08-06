let userInput = parseInt(prompt("Загадайте комп'ютеру число від 1 до 5", "0"))
let machinGues = Math.floor(Math.random() * 5) + 1
let userGuide
let checked=false
do {
      machinGues 
      userGuide = confirm("Загадане число " + machinGues + "?")

      if (userGuide) {
      document.write(`Комп'ютер вгадав загадане число ${userInput}!`)
	checked=true   
	break

      } else {
            alert("Спробуйте ще раз!")
      }
} while(userInput !== machinGues)


if (!checked) {
	
	document.write(`не надуриш я все знаю загадане число ${userInput} `);
}
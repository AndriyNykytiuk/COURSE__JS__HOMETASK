
let randomMachineNumm = Math.floor(Math.random() * 9)
console.log(randomMachineNumm)
let userInputNumm=parseInt(prompt("вгадайте число від 1 до 10","0"))
let atempt=0
do {
	alert('спробуйте ще !')
	userInputNumm = parseInt(prompt("вгадайте число від 1 до 10", "0"))
	atempt++
} while (userInputNumm !== randomMachineNumm)
	
document.write(`ви вгадали! загадане число було ${randomMachineNumm} ви зробили ${atempt +1} спроб`);
	
const dayNumber = parseInt(prompt('Введіть номер дня тижня від 1 до 7', '0'))

if (dayNumber<0||dayNumber===0||dayNumber>7) {
	document.write(` такого дня тижня не існує`)
}
else {
let daysName
switch (dayNumber) {
	case 1: daysName = 'понеділок'
		break 
	case 2: daysName = 'вівторок'
		break 
	case 3: daysName = 'середа'
		break 
	case 4: daysName = 'четвер'
		break 
	case 5: daysName = 'пʼятниця'
		break 
	case 6: daysName = 'субота'
		break 
	case 7: daysName = 'неділя'
		break 
}
document.write(`день тижня зветься ${daysName}`)
}




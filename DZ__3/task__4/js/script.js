let peopleAge = parseInt(prompt('введіть вік людини'))

if (peopleAge>0 && peopleAge<6) {
	document.write(`вік дитини що ходить в садочок`)
} else if (peopleAge>5 && peopleAge < 18) {
	document.write(` вік школяра`)
} else if (peopleAge>17 && peopleAge < 23) {
	document.write(`Студент`)
} else if (peopleAge>22 && peopleAge < 60) {
	document.write(`працівник`)
} else if (peopleAge > 59){
	document.write(`пенсіонер`) // пенсіонери є візного віку тому не встановлював граничного віку
}
else {
	document.write(`неживий`)
}

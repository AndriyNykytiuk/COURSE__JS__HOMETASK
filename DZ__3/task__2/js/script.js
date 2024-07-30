let priceItem = parseFloat(prompt('введіть ціну товару', '0'))
let moneyAmount=parseFloat(prompt('ВВедіть скільки у вас грошей?','0'))

// якщо ціна товару будн 0 то купити його можна а коли не буде грощей то в гаманці-- ні, тому умова перевіряє наявність грошей в  гаманці т
// moneyAmount===0 унеможливлює купівлю при введенні нулів.

if ((moneyAmount<priceItem)||(moneyAmount===0)){ 
	document.write('недостатньо коштів')
} else if ((moneyAmount - priceItem) >= 4) {
	document.write('<br> грошей на товар достатньо навіть на лотерейку, берете?')
} else if ((moneyAmount - priceItem) >= 0) {
	document.write('<br> грошей тільки на товар без лотерей')
}


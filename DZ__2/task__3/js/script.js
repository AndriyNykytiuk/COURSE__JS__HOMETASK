let amountItems=parseInt(prompt("скільки одиниць товару Ви придбали?","0"))
let pricePerItem = parseFloat(prompt(" введіть ціну за одиницю товару", "0"))
const PDV = 0.05

let totalPrice = amountItems * pricePerItem

let taxes = totalPrice * PDV

document.write(`<h2>загальна сума за ${amountItems} товарів складає ${totalPrice} грошей, з якої вираховується ${taxes.toFixed(2)} грошей податків</h2>`)
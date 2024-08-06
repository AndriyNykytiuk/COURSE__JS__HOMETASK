let userNumber = parseInt(prompt('Загадайте число від 1 до 5', '0')); // в умові такого нема проте менше вгадувати буде

const ATTEMPTS = 3 // кількість спроб можливих
let attempt = 0  // кількість спроб компютера
let guess = false // уявімо що компютер не знає поки нічого і нічого не вгадав

do {
    attempt++
    let randomNumber = Math.floor(Math.random() * 5) + 1 // таким чином буде вгадувати число компютер
    let userConfirm = confirm("Вгадав, число " + randomNumber + "?")

    if (userConfirm) {
        document.write(`Компютер вгадав! Ви ввели ${userNumber}, машина згенерувала цифру ${randomNumber}.`)
        guess = true //комп'ютер вгадав число
        break // вихід з циклу 
    } else {
        alert("Наступного разу пощастить.")
    }

} while (attempt < ATTEMPTS)

if (!guess) { // не вгадав компютер 
    document.write(`Компютер програв! Число загадане вами ${userNumber}.`)
}



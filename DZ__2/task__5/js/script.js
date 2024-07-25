let yourTime = parseInt(prompt("якщо Вам цікаво наскільки багато секунд вміщається в добу то введіть будь-яке ціле число", "0"))
const seconds=3600 //стільки секунд в годині
const min=60 //1 хвилина --60 секунд
let hours = Math.floor(yourTime / seconds)//заокруглюємо до цілого числа
let remainTime = yourTime % seconds// те що лишилося після заокруглення

let minutes = Math.floor(remainTime / min) // залишок у хвилини
document.write(`<h2>Пройшло : ${hours} годин та ${minutes} хвилин</h2>`)

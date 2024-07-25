let yourBirthdayYear = parseInt(prompt("введіть рік Вашого народження", "0"))
const PRESENTLY_YEAR = 2024 // очевидно рік буде змінюватися але вважаю що цього року це дійсно стала величина котра не зміниться

let howOldYou = PRESENTLY_YEAR - yourBirthdayYear

document.write(`<h2>Ваш вік складає ${howOldYou} років</h2>`)
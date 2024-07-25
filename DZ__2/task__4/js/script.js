let lenghtCentimetr = parseInt(prompt("скільки сантиметрів треба перевести в метри та кілометри?", "0"))
const METER = 100 //метр має 100 см
const KILOMETR=100000 // стільки сантиметрів у 1 кілометрі 
let lenghtMeter = lenghtCentimetr / METER
let lenghtKm = lenghtCentimetr / KILOMETR

document.write(`<h2>ви ввели ${lenghtCentimetr} сантиметрів, а це ${lenghtMeter.toFixed(2)} метрів та ${lenghtKm.toFixed(3)} кілометрів</h2>`)

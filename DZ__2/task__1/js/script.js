let firstNumber=parseFloat(prompt('Введіть перше число','0'))
let secondNumber=parseFloat(prompt('Введіть друге число','0'))

let summ = firstNumber + secondNumber
let multiplay = firstNumber * secondNumber
let divide= firstNumber/secondNumber

document.write(` 
	<table border="1">
        <thead>
            <tr>
                <th></th>
                <th>Cума</th>
                <th>Добуток</th> 
		    <th >Частка</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>перше число = ${firstNumber}</td>
		     <td rowspan=2>${summ.toFixed(2)}</td>
                <td rowspan=2>${multiplay.toFixed(2)}</td>
		     <td rowspan=2>${divide.toFixed(2)}</td>
            </tr>
            <tr>
                <td>друге число = ${secondNumber} </td>

		   
            </tr>
        </tbody>
    </table>`
)
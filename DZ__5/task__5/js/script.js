
document.write(`<table border="1">`)

document.write(`<tbody>`)

let numbers=1
	
for (let row = 1; row <= 3; row++) {
	document.write(`<tr>`);
	
	for (let column = 1; column <= 3; column++){
		
		document.write(`<td>`);

			document.write(`${numbers++}`);
		
		document.write(`</td>`);
	}
	

	document.write(`</tr>`);
}

document.write(`</tr>`)

document.write(`</tbody>`)

document.write(`</table>`)


document.write(`<table border="1">`)

document.write(`<tbody>`);

for (row = 1; row<= 3; row++){
	document.write(`<tr>`);
	
	for (column = 1; column <= 7; column++){
		document.write(`<td>${column}</td>`);
	}
	document.write(`</tr>`);
	
}

document.write(`</tbody>`);



document.write(`</table>`)

function randomImage() {
	
	let randomNumber = Math.floor(Math.random() * 4)
	
	document.write(`<img src="img/${randomNumber}.webp" alt="#" width=250px height=300px > `);
}

randomImage()
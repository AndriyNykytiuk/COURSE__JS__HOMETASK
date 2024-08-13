
let titleBanner=prompt('  введіть заголовок для банера')
let messageBanner = prompt('  введіть повідомлення для банера')
let randomImage = Math.floor(Math.random() * 4)


function banner(titleBanner,messageBanner,randomImage) {

	document.write(`<h1 style="color:red; font-size:30px; width:300px">${titleBanner} <br> ${messageBanner} </h1>`);
	
	document.write(`<a href="../index.html"> <img src="img/${randomImage}.webp" alt="#" width=250px height=300px > </a>`);
	
}

banner(titleBanner,messageBanner,randomImage)
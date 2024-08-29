if (confirm("Почати тестування?")) {
  // створюємо масив з рандомними числами
	let arrayLenth = 15 // можна зроюити аби користувач вводив
	let max = 150
	let min = 10
	
	
  function createSomeArray(arrayLenth, max, min) {
    const someArray = [];
    for (let i = 0; i < arrayLenth; i++) {
      let randomElementOfArray = Math.floor(Math.random() * (max-min)+min);
      someArray.push(randomElementOfArray);
    }
    return someArray;
  }
  let elements = createSomeArray(arrayLenth,max,min);
  document.write(`${elements} створений масив`);

  function elementMoreThanHundred(someArray) {
    const moreArrray = [];
    for (const ell of someArray) {
      if (ell > 100) {
        moreArrray.push(ell);
      }
    }
    return moreArrray;
  }

  let moreThan = elementMoreThanHundred(elements);
  document.write(`<br> ${moreThan}- більше ста `);
}

if (confirm("поччати тестування")) {
  let inputAmountItems = parseInt(
    prompt("введіть кількість елементів масиву :", "0")
  );
	const arrayWithItems = new Array(inputAmountItems)
	
  function createArray(inputAmountItems, arrayWithItems) {
	    arrayWithItems.fill(1, 0, inputAmountItems / 2)
	  arrayWithItems.fill(7, inputAmountItems / 2)
	  
    return arrayWithItems;
  }

  let element = createArray(inputAmountItems, arrayWithItems);
  document.write(`${element} `);
}

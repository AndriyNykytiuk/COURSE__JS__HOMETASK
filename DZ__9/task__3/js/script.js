if (confirm("поччати тестування")) {
  let inputAmountItems = parseInt(
    prompt("введіть кількість елементів масиву :", "0")
  );
  const arrayWithItems = new Array(inputAmountItems);

  function createArray(arrayWithItems) {
    arrayWithItems.fill(1, 0, 5);
    arrayWithItems.fill(7, 5);

    return arrayWithItems;
  }

  let element = createArray(arrayWithItems);
  document.write(`${element} `);
}

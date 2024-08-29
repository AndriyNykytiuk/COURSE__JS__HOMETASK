if (confirm("Почати тестування?")) {
  let inputAmountItems = parseInt(
    prompt("введіть кількість елементів у масиві : ", "0")
  );
  const arrayWithItems = new Array(inputAmountItems);
  function createArray(arrayWithItems) {
    return arrayWithItems.fill(0);
  }
  let element = createArray(arrayWithItems);
  document.write(`${element}`);
}

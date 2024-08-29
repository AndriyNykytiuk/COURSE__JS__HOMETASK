if (confirm("Почати тестування?")) {
  // створюємо масив з рандомними числами
  let lenth = 10; // довжина масиву
  let min = 80; // мінімальне исло при визначені рандому
  let max = 3000; // максимальтне исло при визначені рандому
  let tax = 0.2;

  function createSomeArray(lenth, min, max) {
    const someArray = [];
    for (let i = 0; i < lenth; i++) {
      let randomElementOfArray = Math.floor(Math.random() * (max - min)+min);
      someArray.push(randomElementOfArray);
    }
    return someArray;
  }
  function taxesArray(prices, tax) {
    const profitArray = [];

    prices.forEach((element) => {
      profitArray.push(Math.ceil(element * tax));
    });
    return profitArray;
  }

  /// нижче не требуло виконувати проте для практики зробив

  function getAmountOfMoney(prices) {
    let amount = 0;
    prices.forEach((element) => {
      amount += element;
    });
    return amount;
  }

  function getTaxesSumm(summ, tax) {
    return (taxesSummury = summ * tax);
  }

  let prices = createSomeArray(lenth, min, max);
  document.write(`${prices} <br>`);

  let stateProfit = taxesArray(prices, tax);
  document.write(`${stateProfit} - масив з 20 відсотками від суми <br>`);
  let summ = getAmountOfMoney(prices);
  document.write(`${summ} -- сума усіх грошей <br>`);

  let govermentProfit = getTaxesSumm(summ, tax);
  document.write(`${govermentProfit.toFixed(2)}--податок у розмірі 20%`);
}

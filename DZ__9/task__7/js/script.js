if (confirm("Почати тестування?")) {
  // створюємо масив з рандомними числами
  let lenth = 10; // довжина масиву
  let min = 80; // мінімальне исло при визначені рандому
  let max = 3000; // максимальтне исло при визначені рандому
  let conditionForFilter = 1000; // уиова які ціни фільтрувати для надання знижки
  let salePercent = 0.3;

  function createSomeArray(lenth, min, max) {
    const someArray = [];
    for (let i = 0; i < lenth; i++) {
      let randomElementOfArray = Math.floor(Math.random() * (max - min)+min);
      someArray.push(randomElementOfArray);
    }
    return someArray;
  }

  function filteredPrices(prices, conditionForFilter) {
    const moreThenThousend = prices.filter((ell) => ell > conditionForFilter);
    return moreThenThousend;
  }

  function filteredPricesSale(filtered, salePercent) {
    const saledPrices = [];
    filtered.forEach((element) => {
      saledPrices.push(Math.floor(element - element * salePercent));
    });
    return saledPrices;
  }

  let prices = createSomeArray(lenth, min, max);
  document.write(`${prices}`);

  let filtered = filteredPrices(prices, conditionForFilter);
  document.write(`<br> ${filtered}--  ціни на які буде знижка 30%`);

  let sale = filteredPricesSale(filtered, salePercent);
  document.write(`<br>${sale} -- ціни після знижки`);
}

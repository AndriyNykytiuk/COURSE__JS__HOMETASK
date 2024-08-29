if (confirm("поачти тестування?")) {
  let min = 1;
  let max = 10000;
  let amountPrices = 5;
  //======================
  function getRandomGeneratePricesHistory(min, max, amountPrices) {
    const historyPricesArray = new Array(amountPrices).fill(0).map(() => {
      return min + Math.floor(Math.random() * (max - min) + min);
    });
    return historyPricesArray;
  }
  let items = getRandomGeneratePricesHistory(min, max, amountPrices);
  document.write(`   ${items} -- згенерований масив <br><br>`);
  //======================  1
  function getMoreThenThousend(items) {
    let itemsMoreThenThousend = items.filter((price) => price > 1000);
    return itemsMoreThenThousend;
  }
  let moreThenThousend = getMoreThenThousend(items);
  document.write(
    `1)   ${moreThenThousend} -  масив в якому є тільки ті що бідьше 1000 <br>`
  );
  //======================   2
  function getItemNumberMoreThenThausend(items) {
    let itemArray = [];
    items.forEach((element, index) => {
      if (element > 1000) {
        itemArray.push(index);
      }
    });
    return itemArray;
  }
  let itemsNumbers = getItemNumberMoreThenThausend(items);
  document.write(
    `2)   ${itemsNumbers} -- номера елементів в масиві які більші за 1000 <br>`
  );
  //======================   3
  function getPricesMoreThanPrevious(items) {
    let moreThenPrevios = [];
    items.forEach((element, index) => {
      if (items[index] > items[index - 1]) {
        moreThenPrevios.push(element);
      }
    });
    return moreThenPrevios;
  }
  let previous = getPricesMoreThanPrevious(items);
  document.write(
    `3)   ${previous}-- ціни, які більші за попереднє значення <br>`
  );

  //======================  4
  function percentagePrices(items) {
    let maxPrice = Math.max(...items);
    let percent = items.map((item) => Math.floor((item / maxPrice) * 100));
    return percent;
  }

  let percentage = percentagePrices(items);
  document.write(`4)   ${percentage}--- відсотки <br>`);

  //======================  5

  function getChangesAmountArray(items) {
    let changeAmount = 0;
    items.forEach((element, index) => {
      if (element !== element[index + 1]) {
        changeAmount++;
      }
    });
    return changeAmount;
  }

  let change = getChangesAmountArray(items);
  document.write(`5)   ${change}---кількість змін <br>`);

  //======================  6

  function getPriseLessThenThousend(items) {
    return items.some((element) => element < 1000);
  }
  let lessThenThousend = getPriseLessThenThousend(items);

  if (lessThenThousend === true) {
    document.write(`6)   є ціна менше 1000 <br>`);
  } else {
    document.write(`6)   цін що менше 1000 немає <br>`);
  }
  //=============================  7

  function allPricesMoreThenThousand(items) {
    const prisesMoreThenThousand = items.every((element) => element > 1000);
    return prisesMoreThenThousand;
  }
  let moreThen = allPricesMoreThenThousand(items);
  if (moreThen === true) {
    document.write(`7)   усі ціни більше 1000<br>`);
  } else {
    document.write(`7)   не всі ціни більше 1000 <br>`);
  }

  //==============================  8

  function getAmountPricesMoreThanThousand(items) {
    let prisesMore = 0;
    items.forEach((element) => {
      if (element > 1000) {
        prisesMore++;
      }
    });

    return prisesMore;
  }
  let amountPricesMoreThan = getAmountPricesMoreThanThousand(items);
  document.write(
    `8)   ${amountPricesMoreThan} кількість цін більше ніж 1000<br>`
  );

  //===================================  9

  function summPricesMoreThenThousand(items) {
    //створюємо масив >1000
    const arrayPrisesMoreThanThousan = items.filter(
      (element) => element > 1000
    );
    // а тепер їх додаємо
    const total = arrayPrisesMoreThanThousan.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return total;
  }
  let summPricesMore = summPricesMoreThenThousand(items);
  document.write(
    `9)   ${summPricesMore} -- сума всіх цін які більші за 1000 <br>`
  );

  //===========================================  10

  function firstPriceMoreThanThousand(items) {
    return items.find((element) => element > 1000);
  }
  let foundElement = firstPriceMoreThanThousand(items);
  document.write(`10)   ${foundElement}--  це перша ціна більще 1000 <br>`);

  //=============================================  11

  function getIndexNumberFirstPriseMoreThenThousand(items) {
    return items.findIndex((element) => element > 1000);
  }
  let indexNumberFirstPrise = getIndexNumberFirstPriseMoreThenThousand(items);
  document.write(
    `11)  ${indexNumberFirstPrise} -- індекс першої ціни більшої за 1000<br>`
  );
  //=============================================  12

  function getLastPriseMoreThousand(items) {
    return items.reverse().find((element) => element > 1000);
  }

  let lastPrise = getLastPriseMoreThousand(items);
  document.write(`12)   ${lastPrise}-- остання ціна більше 1000 <br>`);

  //==============================================  13

  function getLastIndexPriseMoreThenThousand(items) {
    return items.findLastIndex((element) => element > 1000);
  }

  let lastIndex = getLastIndexPriseMoreThenThousand(items);
  document.write(`13)   	${lastIndex}--- індекс останньої ціни більше 1000`);
}

if (confirm("Почати тестування?")) {
  const amountVisitersPeWeek = [];

  function amountVisitersPerDay() {
    for (let day = 1; day <= 7; day++) {
      let visiters = parseInt(
        prompt(`скільки відвідуваччів було ${day} дня `, "0")
      );
      amountVisitersPeWeek.push(visiters);
    }
    return amountVisitersPeWeek;
  }

  function getAmountVisitersLessTwenty(amountVisitersPeWeek) {
    let daysLessTwenty = [];
    for (let attempt = 0; attempt < amountVisitersPeWeek.length; attempt++) {
      if (amountVisitersPeWeek[attempt] < 20) {
        daysLessTwenty.push(attempt + 1);
      }
    }
    return daysLessTwenty;
  }

  function getMinVisitersDay(amountVisitersPeWeek) {
    let minNum = amountVisitersPeWeek[0];
    let minDay = 0;
    for (let i = 0; i < amountVisitersPeWeek.length; i++) {
      if (amountVisitersPeWeek[i] < minNum) {
        minNum = amountVisitersPeWeek[i];
        minDay = i;
      }
    }
    return { minNum, minDay };
  }

  function getMaxVisitorsPerDay(amountVisitersPeWeek) {
    let maxNum = amountVisitersPeWeek[0];
    let maxDay = 0;
    for (let x = 0; x < amountVisitersPeWeek.length; x++) {
      if (amountVisitersPeWeek[x] > maxNum) {
        maxNum = amountVisitersPeWeek[x];
        maxDay = x;
      }
    }

    return { maxNum, maxDay };
  }

  function totalAmountClientsWorkDay(amountVisitersPeWeek) {
    let totalWorkAmount = 0;
    let totalWeekendsAmount = 0;
    for (let total = 0; total < amountVisitersPeWeek.length; total++) {
      if (total < 5) {
        totalWorkAmount += amountVisitersPeWeek[total];
      } else {
        totalWeekendsAmount += amountVisitersPeWeek[total];
      }
    }

    return {
      totalWorkAmount,
      totalWeekendsAmount,
    };
  }
  amountVisitersPerDay();
  let daysLessTwenty = getAmountVisitersLessTwenty(amountVisitersPeWeek);
  if (daysLessTwenty.length > 0) {
    daysLessTwenty.forEach((day) => {
      document.write(`День ${day}, коли відвідувачів було менше 20 <br>`);
    });
  } else {
    document.write(
      `хороші часи для економіки  багато людей витратило багато грошей  <br>`
    );
  }
  let { minDay, minNum } = getMinVisitersDay(amountVisitersPeWeek);
  document.write(
    `найменша кількість клієнтів ${minNum} в ${minDay + 1} день <br>`
  );
  let { maxDay, maxNum } = getMaxVisitorsPerDay(amountVisitersPeWeek);
  document.write(
    `найбільша кількість клієнтів ${maxNum} в ${maxDay + 1} день <br>`
  );

  let { totalWorkAmount, totalWeekendsAmount } =
    totalAmountClientsWorkDay(amountVisitersPeWeek);
  document.write(
    `клієнтів у робочіч дні ${totalWorkAmount}, а у вихідні ${totalWeekendsAmount}`
  );
}

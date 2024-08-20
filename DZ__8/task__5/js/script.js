if (confirm("Почати тестування?")) {
  const listPaymentsOfTaxes = [
    100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200,
  ]; // саме такі суми бо так легше розібратися як працює

  function totalTaxesPayment(listPaymentsOfTaxes) {
    let totalSumm = 0;
    for (let i = 0; i < listPaymentsOfTaxes.length; i++) {
      totalSumm += listPaymentsOfTaxes[i];
    }
    return totalSumm;
  }

  function firstHalfOfYearTaxes(listPaymentsOfTaxes) {
    let halfOfyear = 0;
    for (let i = 0; i < listPaymentsOfTaxes.length / 2; i++) {
      halfOfyear += listPaymentsOfTaxes[i];
    }
    return halfOfyear;
  }

  function secondHalfOfYearTaxes(listPaymentsOfTaxes) {
    let secondHalfOfYear = 0;
    for (
      let i = listPaymentsOfTaxes.length / 2;
      i < listPaymentsOfTaxes.length;
      i++
    ) {
      secondHalfOfYear += listPaymentsOfTaxes[i];
    }
    return secondHalfOfYear;
  }

  function summerTaxes(listPaymentsOfTaxes) {
    let summerAmount = 0;
    for (let i = 5; i < 8; i++) {
      summerAmount += listPaymentsOfTaxes[i];
    }
    return summerAmount;
  }
  function secondQuorter(listPaymentsOfTaxes) {
    let quorter = 0;
    for (let i = 3; i < 6; i++) {
      quorter += listPaymentsOfTaxes[i];
    }
    return quorter;
  }
  function couplesMonths(listPaymentsOfTaxes) {
    let couples = 0;
    for (let i = 1; i < listPaymentsOfTaxes.length; i += 2) {
      couples += listPaymentsOfTaxes[i];
    }
    return couples;
  }

  function startSeasonMonths(listPaymentsOfTaxes) {
    let startSeason = 0;
    for (let i = 0; i < listPaymentsOfTaxes.length; i += 3) {
      startSeason += listPaymentsOfTaxes[i];
    }
    return startSeason;
  }

  let totalTax = totalTaxesPayment(listPaymentsOfTaxes);
  document.write(`загальна сума платежів = ${totalTax} <br> <br>`);

  let halfOfyearTaxes = firstHalfOfYearTaxes(listPaymentsOfTaxes);
  document.write(` сума за півроку = ${halfOfyearTaxes}<br> <br>`);

  let secondPartOfYear = secondHalfOfYearTaxes(listPaymentsOfTaxes);
  document.write(`сума за друге піврічччя = ${secondPartOfYear}<br> <br>`);

  let summerSumm = summerTaxes(listPaymentsOfTaxes);
  document.write(` сума за літо = ${summerSumm} <br> <br>`);

  let quorter = secondQuorter(listPaymentsOfTaxes);
  document.write(` сума за другий квартал = ${quorter} <br> <br>`);

  let couples = couplesMonths(listPaymentsOfTaxes);
  document.write(`сума за парні місяці ${couples} <br> <br>`);

  let startSeason = startSeasonMonths(listPaymentsOfTaxes);
  document.write(
    `сума за місяці які є поачтком сезону ${startSeason} <br> <br>`
  );
}

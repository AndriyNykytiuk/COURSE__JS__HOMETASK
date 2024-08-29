if (confirm("Почати тестування?")) {
  const arrayWithNames = [
    "ULIA",
    "KYRYLO",
    "ROMAN",
    "ANDRIY",
    "IRYNA",
    "NAZAR",
    "EMMA",
  ];

  function getFirstLeteerFromName(arrayWithNames) {
    const firstLetterArray = arrayWithNames.map((firstLeter) => firstLeter[0]);

    return firstLetterArray;
  }
  document.write(`${arrayWithNames}<br> <br>`);

  let firstLeter = getFirstLeteerFromName(arrayWithNames);
  document.write(`${firstLeter}`);
}

if (confirm("Почати тестування?")) {
  alert(" Дано масив імен учнів.  ім’я «Іван тут буде зустрічатися 5 разів ");

  const nameArray = [
    "petro",
    "Ivan",
    "Zahar",
    "Andriy",
    "Ivan",
    "Zahar",
    "Andriy",
    "Ivan",
    "Ivan",
    "Zahar",
    "Andriy",
    "Ivan",
    "Zahar",
    "Andriy",
  ];

  function getIvanName(nameArray) {
    let amountIvan = 0;

    for (attempt = 0; attempt < nameArray.length; attempt++) {
      if (nameArray[attempt] === "Ivan") {
        amountIvan++;
      }
    }
    return amountIvan;
  }

  let ivanName = getIvanName(nameArray);
  document.write(`імя Іван зустрічається в масиві ${ivanName} разів`);
}

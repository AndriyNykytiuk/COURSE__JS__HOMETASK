if (confirm("Почати тестування?")) {
  const autoNumbersArray = [
    "AA3254BE",
    "BK7091BP",
    "AA3245TI",
    "MK7654IU",
    "AN4322JD",
    "AK3452LK",
    "LI5220IR",
    "AU5454HF",
    "AA69655JU",
    "AT2-493OI",
  ];

  function getNumberAutoWithA(autoNumbersArray) {
    const arrayWithA = autoNumbersArray.filter((leter) =>
      leter.startsWith("A")
    );
    return arrayWithA;
  }

  let startLeterA = getNumberAutoWithA(autoNumbersArray);
  document.write(`${autoNumbersArray}<br>`);

  document.write(`${startLeterA} -- які поичнаються на А`);
}

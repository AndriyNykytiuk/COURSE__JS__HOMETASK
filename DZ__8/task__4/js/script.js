if (confirm("Почати тестування?")) {
  alert("введіть оцінки учня");
  let markAmount = parseInt(prompt("скільки оцінок в учня?", "0"));
  const marksArray = [];

  function createMarksArray(marksArray, markAmount) {
    for (i = 0; i < markAmount; i++) {
      let inputMarks = parseInt(prompt("яку оцінку отримав уечнь? ", "0"));
      marksArray.push(inputMarks);
    }
    return marksArray;
  }

  function amountMarkOfTwo(marksArray) {
    let amountOfTwo = 0;
    for (let x = 0; x < marksArray.length; x++) {
      if (marksArray[x] === 2) {
        amountOfTwo++;
      }
    }
    return amountOfTwo;
  }
  function amountOfGoodMarks(marksArray) {
    let goodMarks = 0;
    for (let i = 0; i < marksArray.length; i++) {
      if (marksArray[i] === 4 || marksArray[i] === 5) {
        goodMarks++;
      }
    }
    return goodMarks;
  }

  function lessThenAverege(marksArray, markAmount) {
    let totalAmaunt = 0;
    let lessAverge = 0;
    for (let i = 0; i < marksArray.length; i++) {
      totalAmaunt += marksArray[i];
    }
    let averege = totalAmaunt / markAmount;
    for (let i = 0; i < marksArray.length; i++) {
      if (marksArray[i] < averege) {
        lessAverge++;
      }
    }
    return lessAverge;
  }

  let array = createMarksArray(marksArray, markAmount);
  console.log(marksArray);

  let two = amountMarkOfTwo(marksArray);
  document.write(`кількість двійок = ${two} <br>`);

  let goodMark = amountOfGoodMarks(marksArray);
  document.write(`кількість хороших оцінок = ${goodMark}<br>`);

  let lessAverege = lessThenAverege(marksArray, markAmount);
  document.write(
    ` кількість оцінок які нижчче середнього = ${lessAverege}<br>`
  );
}

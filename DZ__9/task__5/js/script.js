if (confirm("Почати тестування?")) {
  // створюємо масив з рандомними числами
  let lenth = 10; // довжина масиву
  let min = 20; // мінімальне исло при визначені рандому
  let max = 50; // максимальтне исло при визначені рандому

  function createSomeArray(lenth, min, max) {
    const someArray = [];
    for (let i = 0; i < lenth; i++) {
      let randomElementOfArray = Math.floor(Math.random() * (max - min)+min);
      someArray.push(randomElementOfArray);
    }
    return someArray;
  }
  let elements = createSomeArray(lenth, min, max);
  document.write(`${elements} `);

  function moreThanZeroElements(elements) {
    let number = 1;
    for (const element of elements) {
      if (element > 0) {
        number *= element;
      }
    }
    return number;
  }

  let moreOf = moreThanZeroElements(elements);
  document.write(`<br> ${moreOf} - добуток додатніх чисел`);
}

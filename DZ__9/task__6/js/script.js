if (confirm("Почати тестування?")) {
  // створюємо масив з рандомними числами
  let lenth = 10; // довжина масиву
  let min = 4; // мінімальне исло при визначені рандому
  let max = 50; // максимальтне исло при визначені рандому

  function createSomeArray(lenth, min, max) {
    const someArray = [];
    for (let i = 0; i < lenth; i++) {
      let randomElementOfArray = Math.floor(Math.random() * (max - min)+min);
      someArray.push(randomElementOfArray);
    }
    return someArray;
  }

  function getMoreThenFirstElement(elements) {
    let firstEll = elements[1];
    const moreThenFirst = elements.filter((ell) => ell > firstEll);
    return moreThenFirst;
  }

  function getMultiplayTwiceMoreThenFirstElement(moreOffirst) {
    const multiplayedArray = [];
    for (const ell of moreOfFirst) {
      let item = ell * 2; // згідно умови але можна вивести і у змінну за межі функції
      multiplayedArray.push(item);
    }
    return multiplayedArray;
  }

  let elements = createSomeArray(lenth, min, max);
  document.write(`${elements} - згенерований масив`);

  let moreOfFirst = getMoreThenFirstElement(elements);
  document.write(
    `<br>${moreOfFirst}- відфільтровані числа більші ніж перший елемент`
  );

  let multiplay = getMultiplayTwiceMoreThenFirstElement(moreOfFirst);
  document.write(` <br> ${multiplay} - відфільтровані числа помножені на 2 `);
}

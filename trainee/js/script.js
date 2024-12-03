const newObject={
  name:'anri',
  age:'32',
  selfpickUp:'true',
}

localStorage.setItem('rescue',JSON.stringify(newObject))

console.log(localStorage)

const parsIdItem=JSON.parse(localStorage.getItem('rescue'))||[]

console.log(parsIdItem)

const deliveryObject = {
  deliveryTime: "12:30",
  deliveryInfo: {
      selfPickup: false,
      attributes: {
          corps: "1B",
          flat: "99",
          officeNumber: "135o"
      }
  },
  dishes: {
      "2": 2,
      "7": 1,
      "8": 8
  },
  personalInfo: {
      name: "buchacha",
      phoneNumber: "+380679379992"
  }
};


document.addEventListener('DOMContentLoaded', function() {
  const startDate = new Date();
  const datesArray = [];

  for (let i = 0; i < 100; i++) { // Можна змінити '10' на необхідну кількість дат
      const nextDate = new Date(startDate);
      nextDate.setDate(startDate.getDate() + i * 4);
      datesArray.push(nextDate.toLocaleDateString('uk-UA'));
  }

  console.log('Дати кожного 4-го дня:', datesArray[45]);
});


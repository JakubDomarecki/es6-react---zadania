const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
}

class FastFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
  print () {
    console.log('This is fastFood');
  }
}

class FatFreeFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
  print () {
    console.log('This is FatFreeFood');
  }
}


const form = document.querySelector('form');
const productsList = document.getElementById('products');

form.addEventListener('submit', function (e){
  e.preventDefault();

  const nameInput = document.querySelector('#name').value;
  const proteinsInput = parseFloat(document.querySelector('#proteins').value);
  const carbsInput = parseFloat(document.querySelector('#carbs').value);
  const fatInput = parseFloat(document.querySelector('#fat').value);


  const  calories = (proteinsInput * 4) + (carbsInput * 4) + (fatInput * 9);

  let food;
  if (calories > 250) {
    food = new FastFood(nameInput, proteinsInput, carbsInput, fatInput);
  }
  else {
    food = new FatFreeFood(nameInput, proteinsInput, carbsInput, fatInput);
  }
  foods.push(food);
  addToList(food);
  console.log(foods);

  function addToList(food) {
    const listItem = document.createElement('li');
    listItem.textContent = `${food.name} - Calories: ${calories}`;
    productsList.appendChild(listItem);
  }
});

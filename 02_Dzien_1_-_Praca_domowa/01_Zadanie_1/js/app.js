const getNumbers = (array) => {
  return array.map((el) => el * 2);
};

const numbers = [1,2,3,4,5];

console.log(getNumbers(numbers));
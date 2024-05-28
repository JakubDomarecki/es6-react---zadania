const generateRandomNumbers = (max) => {
    const array = [];
    for (let i = 0; i < 6; i++){
        const randomNumber = Math.floor(Math.random() * max);
        array.push(randomNumber);
    }
    return array;
};

const randomNumbers = generateRandomNumbers(6);
console.log(randomNumbers);


const [value1, ,value3] = randomNumbers;
console.log(value1);
console.log(value3);





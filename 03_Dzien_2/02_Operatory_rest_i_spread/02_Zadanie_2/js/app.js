const getAverage = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

console.log(getAverage(2, 4, 5, 6, 7, 79));

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
const getSecondMaxNumber = array => {
    array.sort((a, b) => b - a);
    return array[1];
};
console.log(getSecondMaxNumber(arr1));
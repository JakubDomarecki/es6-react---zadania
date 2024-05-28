function randomize (param1, param2, callback) {
    if (typeof callback !== 'function'){
        console.error('Error: Callback is not a function.');
    }
    const randomNumber = Math.floor(Math.random() * (param2 - param1 + 1)) + param1;
    callback(randomNumber);
}

randomize(1, 10, function (number) {
    console.log('Wylosowana liczba', number);
});


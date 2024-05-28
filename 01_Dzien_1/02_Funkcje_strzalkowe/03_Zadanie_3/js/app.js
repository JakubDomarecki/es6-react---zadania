const runInterval = (n = 8) => {
    let counter = 0;

    const interval = setInterval(() => {
        console.log("Hello");
        counter++;

        if (counter === n) {
            clearInterval(interval);
        }
    }, 500);
};
// runInterval(10);
runInterval();

function Weather (array) {
    this.temperatures = array;
}

Weather.prototype.getAvgTemperature = function () {
    const sum = this.temperatures.reduce((acc, n) => acc + n, 0);
    return sum / this.temperatures.length;
};





const day1 = new Weather([-2, 4.4, 3]);
console.log( day1.getAvgTemperature());


const avgTEMP = document.querySelector('#avg-temp');
avgTEMP.innerText = day1.getAvgTemperature();
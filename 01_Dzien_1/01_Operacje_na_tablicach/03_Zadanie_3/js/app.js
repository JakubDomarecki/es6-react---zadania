const years = [1995, 1856, 2014, 1987];

const currentYear = new Date().getFullYear();

const ages = years.map(function (year){
    return  currentYear - year;
});

console.log(ages);
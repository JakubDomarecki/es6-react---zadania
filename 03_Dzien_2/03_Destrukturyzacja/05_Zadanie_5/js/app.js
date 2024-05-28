// const showAnimal = () => {
//     const cat = {
//         name: 'Mruczek',
//         age: 10,
//         getVoice: () => 'miau miau',
//     };
//     console.log(`Kot ${cat.name} ma ${cat.age} lat i robi ${cat.getVoice()}`);
// };
//
// const animal = showAnimal();



//destrukuryzacja
const cat = {
    name: 'Mruczek',
    age: 10,
    getVoice: () => 'miau miau',
};
const showAnimal = ({name, age, getVoice}) => {
    console.log(`Kot ${name} ma ${age} lat i robi ${getVoice()}`);
};

showAnimal(cat);

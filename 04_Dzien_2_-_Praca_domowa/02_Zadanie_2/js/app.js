const wally = {
    name: "Wally",
    age: 2,
    profession: "naprawianie innych robotów"
};
const saySomething = ({name, age, profession}) => {
    return `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${profession}.`;
};

console.log(saySomething(wally));

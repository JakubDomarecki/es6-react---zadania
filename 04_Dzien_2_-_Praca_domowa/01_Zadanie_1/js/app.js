class Insect {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
}

class  Centipede  extends Insect{
    constructor(name) {
        super(name, 20);
    }
    getLegs() {
        return (`Cześć mam na imię ${this.name} jestem stonogą i mam ${this.legs} nóg`);
    };
}


class  Spider  extends Insect{
    constructor(name) {
        super(name, 8);
    }
    getLegs() {
        return (`Cześć mam na imię ${this.name} jestem pająkiem i mam ${this.legs} nóg`);
    };
}

const spider = document.querySelector('#info-spider');
const Majkel = new Spider("Majkel");
console.log(Majkel.getLegs());
spider.innerText = Majkel.getLegs();

const centipede = document.querySelector('#info-centipede');
const lucy = new Centipede("Lucy");
console.log(lucy.getLegs());
centipede.innerText = lucy.getLegs();



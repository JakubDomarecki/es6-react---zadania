class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Boat extends Vehicle {
    sail() {
        console.log('Jestem: ' + this.getName() + " i pływam");
    }
}

class Car extends Vehicle {
    drive() {
        console.log('Jestem: ' + this.getName() + " i jadę");
    }
}

class Plane extends Vehicle {
    fly() {
        console.log('Jestem: ' + this.getName() + " i latam");
    }
}

const boat = new Boat("Żaglówka");

boat.sail();

const car = new Car("Volvo");

car.drive();

const plane = new Plane('Boeing');

plane.fly();
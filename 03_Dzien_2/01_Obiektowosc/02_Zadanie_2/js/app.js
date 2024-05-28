class Duck {
    constructor() {
        this.type = "ordinary duck";
    }
    sound () {
        console.log("Quack quack");
    }
    swim() {
        console.log("I'm swimming...");
    }
    print() {
        console.log(`Looks like ${this.type}`);
    }
    fly() {
        console.log("I'm flying...");
    }
}

// const donaldDuck = new Duck();
// donaldDuck.sound();
// donaldDuck.swim();
// donaldDuck.print();
// console.log(donaldDuck);

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = "wild duck";
    }
}

// const daffyDuck = new WildDuck();
// daffyDuck.sound();
// daffyDuck.swim();
// daffyDuck.print();
// console.log(daffyDuck);

class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = "mallard duck";
    }
}

// const daisyDuck = new MallardDuck();
// daisyDuck.sound();
// daisyDuck.swim();
// daisyDuck.print();
// console.log(daisyDuck);

class RubberDuck extends Duck {
    constructor() {
        super();
        this.type = "rubber duck";
    }
    fly() {
        console.log("Rubber ducks can't fly!");
    }

}
const howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();
console.log(howardTheDuck);



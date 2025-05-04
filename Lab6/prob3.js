function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}
Animal.prototype.run = function (increase) {
    this.speed += increase;
};
Animal.compareBySpeed = function (a1, a2) {
    return a2.speed - a1.speed;
};
function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}
Rabbit.prototype.hide = function () {
    console.log(`${this.name} hides`);
};
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
Object.setPrototypeOf(Rabbit, Animal)


const rabbit1 = new Rabbit("Ok", 20);
rabbit1.run(5);
rabbit1.hide();

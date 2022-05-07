var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    return Animal;
}());
var animalOne = new Animal("Lion", "Carnivore");
console.log(animalOne);

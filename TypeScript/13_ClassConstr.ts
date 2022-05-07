class Animal {
  constructor(private _name: string, private _type: string) {}

  get name() {
    return this._name;
  }

  set name(str) {
    if (str !== undefined) {
      console.log("Setting via Setter!");
      this._name = str;
    } else {
      console.log("Please pass valid model");
    }
  }
}

let animalOne = new Animal("Lion", "Carnivore");
console.log(animalOne);

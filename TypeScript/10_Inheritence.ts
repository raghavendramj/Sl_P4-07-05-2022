class Base {
  x = 4;
}

class Derived extends Base {
  constructor() {
    super();
    console.log("Derived constructor ", this.x);
  }
}

let object = new Derived();
console.log("Derived Object ", object);

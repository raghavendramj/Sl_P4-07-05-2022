export class Vehicle {
  private _model: string;
  private _make: string;
  private _year: number;

  constructor(model = "Innova", make = "Toyota", year = 2012) {
    this._model = model;
    this._make = make;
    this._year = year;
  }

  get model() {
    return this._model;
  }

  set model(str) {
    if (str !== undefined) {
      console.log("Setting via Setter!");
      this._model = str;
    } else {
      console.log("Please pass valid model");
    }
  }
}

let test = new Vehicle();
console.log(test.model);
test.model = undefined;
console.log(test.model);

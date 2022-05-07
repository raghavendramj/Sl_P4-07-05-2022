"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(model, make, year) {
        if (model === void 0) { model = "Innova"; }
        if (make === void 0) { make = "Toyota"; }
        if (year === void 0) { year = 2012; }
        this._model = model;
        this._make = make;
        this._year = year;
    }
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (str) {
            if (str !== undefined) {
                console.log("Setting via Setter!");
                this._model = str;
            }
            else {
                console.log("Please pass valid model");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var test = new Vehicle();
console.log(test.model);
test.model = undefined;
console.log(test.model);

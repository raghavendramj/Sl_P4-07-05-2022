var Square = /** @class */ (function () {
    //Deafults -> 0,0
    function Square(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Square;
}());
var square1 = new Square();
console.log(square1);
var square2 = new Square(25, 36);
console.log(square2);

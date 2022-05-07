var PointClass = /** @class */ (function () {
    //Deafults -> 0,0
    function PointClass(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    PointClass.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return PointClass;
}());
var point = new PointClass(12, 14);
console.log('Before Scaling ', point);
point.scale(2);
console.log('After Scaling ', point);

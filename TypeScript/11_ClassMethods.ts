class PointClass {
  x: number;
  y: number;

  //Deafults -> 0,0
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

let point  = new PointClass(12, 14);
console.log('Before Scaling ', point);
point.scale(2);
console.log('After Scaling ', point);

class Square {
  x: number;
  y: number;

  //Deafults -> 0,0
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

let square1 = new Square();
console.log(square1)

let square2 = new Square(25, 36);
console.log(square2)

class Reactangle {
  h: number;
  w: number;
}

const rect = new Reactangle();
rect.h = 10;
rect.w = 20;

console.log("Rectange Object : ", rect);
// rect.h = "23";

class TestGreet {
  name: string;
}

class Greeter {
  name: string;
  constructor(message) {
    this.name = message;
  }
}

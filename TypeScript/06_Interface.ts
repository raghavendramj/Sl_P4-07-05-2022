interface Shape {
  area: number;
  x: number;
  y: number;
}

function printCoOrdinatesInInterface(point: Shape) {
  console.log("x ", point.x);
  console.log("y ", point.y);
}

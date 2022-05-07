type PointType = {
  x: number;
  y: number;
};

function printCoOrdinates(point: PointType) {
  console.log("x ", point.x);
  console.log("y ", point.y);
}

printCoOrdinates({ x: 20, y: 30 });

type ID = number | string;

function addNumbersOrPrint(param: ID) {
  if (typeof param === "number") {
    console.log("Its a number");
  } else {
    console.log("String");
  }
}

addNumbersOrPrint(12);
addNumbersOrPrint("Raghav");
// addNumbersOrPrint(true);
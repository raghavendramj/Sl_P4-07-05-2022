let object: any = {
  x: 0,
};

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;

let myName: string = "Gilly";
let myNameWithoutType = "Gilly";

// myName = 10;
// myNameWithoutType = 10;

function greetPerson(name: string) {
  console.log("Hello " + name.toUpperCase() + "!!");
}

// greetPerson(45);
greetPerson("Ricky");

function isValid(num: number): boolean {
  return num > 5;
}

isValid(25);
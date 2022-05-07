function greetPeople(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}`);
}

greetPeople('Raghav', new Date());


// Steps to execute the typescript programs
//Step 1 Transpilation :- tsc 02_Introduction.ts 1-> Generate a javascript file 02_Introduction.js
//Step 2 Execution :- node 02_Introduction.js
// Shorthand Transpilation and Execution :- tsc 02_Introduction.ts | node 02_Introduction.js
function testArrays() {
  const names = ["Alice", "Bob", "Eva"];

  names.forEach((value, index, arr) => {
    console.log("Index :- ", index, "value :- ", value, "arr :- ", arr);
    console.log("Uppercased Value : ", value.toUpperCase());
  });
}

testArrays();

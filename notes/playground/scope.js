let varOne = "varOne"; // global scope

{
    // local scope 4
    let varFour = 'varFour'
}

if (true) {
  // local scope 1
  console.log(varOne);
  console.log(varTwo);
  if (true) {
    // local scope 2
    let varTwo = "varTwo";
    console.log(varThree);
    if (true) {
      // local scope 3
      let varThree = "varThree";
    }
  }
}

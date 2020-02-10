let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);
console.log(myBook.title + " by " + myBook.author);
myBook.title = "Animal farm";
console.log(`${myBook.title} by ${myBook.author}`);

// create an object witht the variable person(keys: name, age, city)
// Kelly is 24 and lives in Malindi

let person = {
  name: "Kelly",
  age: "24",
  city: "Malindi"
};
console.log(`${person.name} is  ${person.age} and lives in ${person.city}`);

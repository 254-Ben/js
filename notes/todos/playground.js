var data = ["nairobi", "stuttgart", "berlin", "mombasa", "barcelona"];
// filter through the data and give the one that includes the text "stu"
// () paraenthesis
// {} curly braces
// [] brackets

//FILTER (render on specific condition)
const filteredData = data.filter(function(data) {
  return data.includes("na");
});
console.log(filteredData);

// MAP (transform an array)
const citiesMap = data.map(function(city) {
  return city + "!";
});
console.log(citiesMap);

// use map to multiply numbers by 2
const numbers = [2, 5, 11, 13, 15, 17, 20];
const mult = numbers.map(number => {
  return number * 2;
});
console.log(mult);
// use filters and get numbers that are greater than 5
const evaluate = numbers.filter(number => {
  return number > 5;
});
console.log(evaluate);

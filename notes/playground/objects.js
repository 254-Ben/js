let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
console.log(bookSummary.summary);

console.log(bookSummary.pageCountSummary);
// 1984 is 326 pages long

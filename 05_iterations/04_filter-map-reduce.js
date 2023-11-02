// const num = [1,2,3,4,5];
// const mynum = num.filter((item) => {
//     return item > 2 ;
// })

// console.log(mynum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filteredBooks = books.filter((bk) => {
  return bk.genre === "Fiction" && bk.publish > 1980;
});

// console.log(filteredBooks);

const arr = [1, 2, 34, 5, 6, 7, 8, 9];

// const result = arr.map((item) => {
//     return item + 10 ;
// })

//Chaining 

const result = arr
  .map((item) => {
    return item * 100;
  })
  .map((item) => {
    return item - 10;
  })
  .filter((item) => {
  return item > 500
  })

console.log(result);

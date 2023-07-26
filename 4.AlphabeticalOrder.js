function printBookTitlesInAlphabeticalOrder(books, callback) {
    const bookTitles = books.map(book => book.title);
    const sortedTitles = bookTitles.sort();
  
    callback(sortedTitles);
  }
  
  // Example callback function to log titles to the console
  function logTitles(titles) {
    console.log("Book Titles in Alphabetical Order:");
    titles.forEach(title => console.log(title));
  }

const booksList = [
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011 },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 }
  ];

  printBookTitlesInAlphabeticalOrder(booksList,logTitles);
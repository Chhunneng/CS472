let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        ID: 3257,
    },
];

function addBook(title, author, ID) {
    let found = libraryBooks.find((book) => book.title === title && book.ID === ID);
    if (found) return found;
    let newBook = { title, author, ID };
    libraryBooks.push(newBook);
    return newBook;
}

function getTitles() {
    return libraryBooks.map((book) => book.title).sort();
}

function findBooks(title) {
    return libraryBooks
        .filter((book) => book.title.includes(title))
        .sort((b1, b2) => b1.ID - b2.ID);
}

// addBook("Test", "test", 2312);
// console.log(libraryBooks);
// console.log(getTitles());
// console.log(findBooks("Road"));
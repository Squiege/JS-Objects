// Task 1

// New Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    // Task 2
    this.bookDetails = function() {
        console.log(`Book Details: Title - ${this.title}, Author - ${this.author}, Number of Pages - ${this.pages}`);
    }
}

let book1 = new Book("Red Rising", "Pierce Brown", 382);
let book2 = new Book("Dune", "Frank Herbert", 412);
let book3 = new Book("1984", "George Orwell", 328);

// Task 3

let library = [];

library.push(book1);
library.push(book2);
library.push(book3);

// Search function for book title
function SearchBookByTitle(input_title) {
    let return_title = library.filter(book => 
        book.title.toLowerCase().includes(input_title.trim().toLowerCase())
    );
    console.log(return_title);
}

SearchBookByTitle("Red");

// Search function for book author
function SearchBookByAuthor(input_author) {
    let return_author = library.filter(book =>
        book.author.toLowerCase().includes(input_author.trim().toLowerCase())
    );
    console.log(return_author);
}

SearchBookByAuthor("Frank");

// Add book function that adds a book to the library
function addNewBook(title, author, pages) {
    let new_book = new Book(title, author, pages);
    library.push(new_book);
    console.log(`${title} by ${author} has been added to the library!`);
}

addNewBook("The Hobbit", "J.R.R. Tolkien", 310);

// Task 4

// Searches through the library for books that have more than 100 pages
function moreThan100() {
    let searchLibrary = library.filter(book => 
        book.pages >= 100
    );
    console.log(searchLibrary);
}

moreThan100();

// Modifying book properties
function modifyBookDetails() {
    // Use map to create a new array with modified titles and authors
    let updatedLibrary = library.map(book => {
        // Modify the book's title and author properties
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });

    // Output the modified library
    console.log(updatedLibrary);
}

modifyBookDetails();
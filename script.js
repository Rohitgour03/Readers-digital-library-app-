//  **************** suggestion list ******************

const suggestedBooks = [{
        name: "Atomic Habits",
        author: "James Clear",
        pages: 306,
        read: false,
    },
    {
        name: "4 hour work week",
        author: "Tim ferris",
        pages: 396,
        read: false,
    },
    {
        name: "How to win friends and influence people",
        author: "Dale carnegie",
        pages: 228,
        read: false,
    },
    {
        name: "Attitude is everything",
        author: "Jeff keller",
        pages: 144,
        read: false,
    },
];

// ************************** Nav toggle functionality ******************

const navToggle = document.querySelector(".menu-icon");
const navLinksCtn = document.querySelector(".nav-links-ctn");
const navBar = document.querySelector("nav");

navToggle.addEventListener("click", (e) => {
    console.log("working...");
    navBar.classList.toggle("show-nav");
});

// ************************** Form functionality ************************

// TODO Add Books by fetching the data from an API, show only selected one

// TODO More Info about the book such as the Price, reviews, ratings, downloads, sold data.

// TODO The book added to the library and local storage but does not remove on clicking the remove button, so Fix that.

// TODO The Read Status is just not working

// TODO Add the favorite book heart icon functionality to all books

// TODO Also inform the user that book has been either added or removed using a popup message.

// TODO There should not be the same book multiple times in the library, Only one unique copy should be there

// TODO If suggested book is added to the library then button should say added to the library

// TODO Add the filter to the reading list

// setting the reference of dom elements in the variables
const form = document.querySelector("#form");
const bookName = form.querySelector("#book-name-input");
const bookAuthor = form.querySelector("#book-author-input");
const bookPages = form.querySelector("#book-pages-input");
const readStatus = form.querySelector("#read-status-input");
const submitBtn = form.querySelector(".submit-btn");
const readingList = document.querySelector(".reading-list-section");
const addBtn = document.querySelectorAll(".add-btn");

let myLibrary = [{
        name: "Compound Effect",
        author: "Darren Hardy",
        pages: 150,
        read: false,
        info: function() {
            return `${name} by ${author}, ${pages}, ${read}`;
        },
    },
    {
        name: "Atomic Habits",
        author: "James Clear",
        pages: 350,
        read: true,
        info: function() {
            return `${name} by ${author}, ${pages}, ${read}`;
        },
    },
    {
        name: "Mindset",
        author: "Dr. Carol S. Dweck",
        pages: 200,
        read: false,
        info: function() {
            return `${name} by ${author}, ${pages}, ${read}`;
        },
    },
];

// Book constructor function to create the book object
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.name} by ${this.author}, ${this.pages}, ${read}`;
    };
}

// Handle UI tasks
// Function to create the new book object and adding it to the array
function addBookToLibrary() {
    // Getting the values from the form and store them in variables
    let name = bookName.value;
    let author = bookAuthor.value;
    let pages = parseInt(bookPages.value);
    let status = readStatus.checked;

    if (name === "" || author === "" || pages === "") {
        // Improve on this, Make the JS validation and make the pop up card to show the warnings
        alert("Please fill in all the details");
    } else {
        let book = new Book(name, author, pages, status);
        myLibrary.push(book);
        console.log(myLibrary);

        // add book to the page.
        displayBooks(book);

        //add book to local storage
        addBookToLocalStorage(book);
    }
}

// Function to show the books of the array
function showBooks() {
    // const books = myLibrary;
    const books = getBooksFromLocalStorage();
    books.forEach((book, index) => displayBooks(book, index));
}

// Function to show the added book to the array on the page.
function displayBooks(book, index = myLibrary.length - 1) {
    // Also improve on this, Creating many elements, adding class to them, then properly appending them to the DOM using the Javascript, Instead of all this many things, create one HTML markup of all this and dynamically add specific info like classNames and then append it to the DOM.

    const demoBook = document.createElement("div");

    demoBook.dataset.index = index;
    demoBook.classList.add("demo-book");

    const bookContent = `
        <h3 class="book-title">${book.name}</h3>
        <div class="author_and_page-ctn">
            <p class="author-name">${book.author}</p>
            <p class="pages-number">${book.pages}</p>
        </div>
        <div class="read-status-ctn">
            <span>Read</span>
            <label class="switch">
                <input type="checkbox" name="read status" />
                <span class="slider round"></span>
            </label>
        </div>
        <button class="primary-btn remove-btn">Remove from list</button>
    `;

    demoBook.innerHTML = bookContent;
    readingList.appendChild(demoBook);

    // const bookTitle = document.createElement('h3');
    // const authorAndPageCtn = document.createElement('div');
    // const authorName = document.createElement('p');
    // const pagesNumber = document.createElement('p');
    // const readStatusCtn = document.createElement('div');
    // const readStatusText = document.createElement('span');
    // const label = document.createElement('label');
    // const input = document.createElement('input');
    // const slider = document.createElement('span');
    // const button = document.createElement('button');

    // bookTitle.textContent = `${book.name}`;
    // authorName.textContent = `${book.author}`;
    // pagesNumber.textContent = `${book.pages}`;
    // readStatusText.textContent = "Read";
    // button.textContent = "Remove from list";

    // demoBook.dataset.index = index;
    // demoBook.classList.add('demo-book');

    // bookTitle.classList.add('book-title');
    // authorAndPageCtn.classList.add('author_and_page-ctn');
    // authorName.classList.add('author-name');
    // pagesNumber.classList.add('pages-number');
    // readStatusCtn.classList.add('read-status-ctn');
    // label.classList.add('switch');
    // // label.setAttribute('for', 'read-status');
    // // input.setAttribute('id', 'read-status');
    // input.setAttribute('type', 'checkbox');
    // input.setAttribute('name', 'read status');
    // slider.classList.add('slider')
    // slider.classList.add('round')
    // button.classList.add('primary-btn');
    // button.classList.add('remove-btn');

    // readingList.appendChild(demoBook);
    // demoBook.appendChild(bookTitle);

    // demoBook.appendChild(authorAndPageCtn);
    // authorAndPageCtn.appendChild(authorName);
    // authorAndPageCtn.appendChild(pagesNumber);
    // demoBook.appendChild(readStatusCtn);
    // readStatusCtn.appendChild(readStatusText);
    // readStatusCtn.appendChild(label);
    // label.appendChild(input);
    // label.appendChild(slider);
    // demoBook.appendChild(button);

    console.log(demoBook);
}

// Function to clear fields
function clearFields() {
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
}

// Function to add suggested book to reading list
function addSuggestionBookToLibrary(e) {
    const name = e.target.parentElement.firstElementChild.textContent;
    console.log(
        e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild
    );
    const author =
        e.target.parentElement.firstElementChild.nextElementSibling
        .firstElementChild.textContent;
    const pages =
        e.target.parentElement.firstElementChild.nextElementSibling.lastElementChild
        .textContent;
    const book = new Book(name, author, pages);
    myLibrary.push(book);
    displayBooks(book);
    addBookToLocalStorage(book);
}

// function to remove the book from the array and from the page.
function removeBook(el) {
    if (el.classList.contains("remove-btn")) {
        el.parentElement.remove(); // removing from the page.
        const arrIndex = parseInt(el.parentElement.dataset.index); // removing from the list.
        myLibrary.splice(arrIndex, 1);
    }
    console.log(el.parentElement.firstChild.textContent);
}

// Handle Storage
function getBooksFromLocalStorage() {
    let books;
    if (localStorage.getItem("books") === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
}

function addBookToLocalStorage(book) {
    const books = getBooksFromLocalStorage();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
}

function removeBookFromLocalStorage(name) {
    const books = getBooksFromLocalStorage();
    books.forEach((book, index) => {
        if (book.name === name) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem("books", JSON.stringify(books));
}

// Event: adding the book to the array on clicking the submit btn.
submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent actual submit
    addBookToLibrary(); // adding book to the list and to the page also.
    clearFields(); // clearing the fields once the form is filled.
});

// Event: display the books
document.addEventListener("DOMContentLoaded", showBooks);

// Event: remove the book from the list
readingList.addEventListener("click", (e) => {
    // remove a book from the page and list
    removeBook(e.target);

    // remove the book from the local storage
    removeBookFromLocalStorage(e.target.parentElement.firstChild.textContent);
});

// Event: add the suggested book to the reading list
addBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        addSuggestionBookToLibrary(e);
    });
});
// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI Class: Handle UI Tasks
class UI {
    //display books 
    static display() {


        let books = Store.getBooks()

        books.forEach((item) => {
            UI.addBookToList(item)
        })


    }

    static addBookToList(book) {

        //create Element
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     `;

        //get booklist 

        const list = document.getElementById("book-list")

        //append 

        list.append(row)


    }

    //delete a book from book-list 
    static deleteBook(el) {

        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove()
        }
    }

    //clear fields

    static clearFields() {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#isbn").value = ''
    }

    //show alert 
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);


    }

}


// Store Class: Handles Storage

class Store {

    //get books 
    static getBooks() {
        let books
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books
    }

    //add a book 

    static addBook(book) {
        let books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    //remove a book 

    static removeBook(isbn) {


        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));

    }
}


// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.display())


// Event: Add a Book
document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //get form value
    let title = e.target.title.value
    let author = e.target.author.value
    let isbn = e.target.isbn.value

    //validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');

        // UI.showAlert()
    } else {
        //create new book

        let newBook = new Book(title, author, isbn)

        //add to list 

        UI.addBookToList(newBook)

        //clear fields

        UI.clearFields()

        //store the new book 

        Store.addBook(newBook)

        //show alert
        UI.showAlert('Book Added', 'success');
    }




})


// Event: Remove a Book
document.getElementById("book-list").addEventListener("click", (e) => {

    UI.deleteBook(e.target)

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    UI.showAlert('Book Removed', 'success');
})


console.log(Store.getBooks())




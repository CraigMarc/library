let myLibrary = [];


function Book(title, author, pages) {
   
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return title + ' ' + author + ' ' + pages
  }
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages))
}

function displayBooks(bookArray) {
 
}


addBookToLibrary('book3' , 'Tolkien', '500')
console.log(myLibrary)

const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')
console.log(theHobbit)
console.log(theHobbit.info())
console.log(Object.getPrototypeOf(Book))
console.log(Object.getPrototypeOf(theHobbit) == Book.prototype)
console.log(Book.prototype)
console.log(theHobbit.valueOf())


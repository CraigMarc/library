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
  let table = document.getElementById("bookTable");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.textContent = bookArray[0].title;
  cell2.textContent = bookArray[0].author;
  cell3.textContent = bookArray[0].pages;
 console.log(bookArray[0].title)
}


addBookToLibrary('book3' , 'Tolkien', '500')
console.log(myLibrary[0].author)
displayBooks(myLibrary)



const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')
console.log(theHobbit)
console.log(theHobbit.info())



let myLibrary = [{title: 'The Hobbit', author: 'Tolen', pages: '500'}, {title: 'The Hobbit', author: 'Tolkien', pages: '500'}];


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
  for (let i = 0; i < bookArray.length; i++) {
  let table = document.getElementById("bookTable");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.textContent = bookArray[i].title;
  cell2.textContent = bookArray[i].author;
  cell3.textContent = bookArray[i].pages;
 
  }
}


addBookToLibrary('book3' , 'Tolkien', '50')

displayBooks(myLibrary)



const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')
console.log(theHobbit)
console.log(theHobbit.info())



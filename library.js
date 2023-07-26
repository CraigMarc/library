let myLibrary = [];


function Book(title, author, pages, read) {
   
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' ' + author + ' ' + pages
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

function deleteTable(bookArray) {
  console.log(bookArray)
  for (let i = 1; i < bookArray.length + 1; i++) {
    document.getElementById("bookTable").deleteRow(1);
    
   
    }
}


function displayBooks(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
  let table = document.getElementById("bookTable");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.textContent = bookArray[i].title;
  cell2.textContent = bookArray[i].author;
  cell3.textContent = bookArray[i].pages;
  cell4.textContent = bookArray[i].read;
  let tBox = document.createElement('input');
  tBox.setAttribute('type', 'checkbox');
  tBox.setAttribute('value', 'i');
  cell4.appendChild(tBox);

  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('value', 'i');
  deleteButton.textContent = 'Delete'
  cell5.appendChild(deleteButton);


  }
}


/*
addBookToLibrary('book3' , 'Tolkien', '50')

displayBooks(myLibrary)*/



 
/*get data from form*/
  
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());
  let authorForm = data.author
  let pagesForm = data.pages
  let titleForm = data.title
  let readForm = data.read
  console.log(data)
  if (myLibrary.length > 0)
{ deleteTable(myLibrary)
}
  addBookToLibrary(titleForm, authorForm, pagesForm, readForm)
  displayBooks(myLibrary)
  document.getElementById("form").reset();
});



/*
const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')
console.log(theHobbit)
console.log(theHobbit.info())*/



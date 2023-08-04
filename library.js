let myLibrary = [];

/*hide menu*/

const form = document.getElementById('form');
form.style.display = 'none';

/*form button listner*/

const btn = document.getElementById('showMenu');

btn.addEventListener('click', () => {
  form.style.display = 'block';
  btn.style.display = 'none';
})


/*object constructor*/

function Book(title, author, pages, read) {

  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + ' ' + author + ' ' + pages
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

console.log(myLibrary)

function deleteTable(bookArray) {

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
    cell5.setAttribute('id', 'cell5');
    let cell6 = row.insertCell(5);
    cell6.setAttribute('id', 'cell6');

    cell1.textContent = bookArray[i].title;
    cell2.textContent = bookArray[i].author;
    cell3.textContent = bookArray[i].pages;
    cell4.textContent = bookArray[i].read;

    let readButton = document.createElement('button');
    readButton.setAttribute('type', 'button');
    readButton.setAttribute('id', 'readButton');
    readButton.setAttribute('value', i);
    readButton.textContent = 'Read'
    cell5.appendChild(readButton);



    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.setAttribute('value', i);
    deleteButton.textContent = 'Delete'
    cell6.appendChild(deleteButton);

    /*delete button event listener*/

    const number = document.querySelectorAll('#deleteButton');

    number.forEach((button) => {

      button.addEventListener('click', (e) => {
        let value = button.value

        deleteBook(value)
        e.stopImmediatePropagation();


      })
    })

    /* read button event listner*/

    const read = document.querySelectorAll('#readButton');

    read.forEach((button) => {

      button.addEventListener('click', (e) => {
        let value = button.value
        readBook(value)

        e.stopImmediatePropagation();


      })
    })




  }
}

/*read book*/
function readBook(value) {

  if (myLibrary[value].read == 'No') {
    myLibrary[value].read = 'Yes'
  }

  else {
    myLibrary[value].read = 'No'
  }

  deleteTable(myLibrary)
  displayBooks(myLibrary)


}
/*delete book*/



function deleteBook(value) {


  myLibrary.splice(value, 1)


  deleteTable2(myLibrary)
  displayBooks(myLibrary)
}

function deleteTable2(bookArray) {

  for (let i = 1; i < bookArray.length + 2; i++) {
    document.getElementById("bookTable").deleteRow(1);


  }
}



/*get data from form*/

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());
  let authorForm = data.author
  let pagesForm = data.pages
  let titleForm = data.title
  let readForm = data.read
  console.log(data)
  if (myLibrary.length > 0) {
    deleteTable(myLibrary)
  }
  addBookToLibrary(titleForm, authorForm, pagesForm, readForm)
  displayBooks(myLibrary)
  document.getElementById("form").reset();
  form.style.display = 'none';
  btn.style.display = 'block';

});




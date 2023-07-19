function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return title + ' ' + author + ' ' + pages
  }
}

const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')

console.log(theHobbit.info())


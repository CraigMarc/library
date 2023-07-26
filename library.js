function Book(title, author, pages) {
    console.log(this)
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return title + ' ' + author + ' ' + pages
  }
}
console.log(this)
const theHobbit = new Book('The Hobbit' , 'Tolkien', '500')

console.log(theHobbit.info())
console.log(Object.getPrototypeOf(Book))
console.log(Object.getPrototypeOf(theHobbit) == Book.prototype)
console.log(Book.prototype)
console.log(theHobbit.valueOf())
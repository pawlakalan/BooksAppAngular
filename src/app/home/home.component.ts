import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../home/book.model';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild('addBookComponent') addBookComponent!: AddBookComponent
  constructor() {}
  ngOnInit(): void {
  }

  books: Book[] = [
    { title: "Harry Potter i Kamień Filozoficzny", author:"J.K. Rowling", isbn:9788380082113, year:2000, genre:"młodzieżowa" },
    { title: "Drużyna Pierścienia", author:"J.R.R. Tolkien", isbn:9788324144242, year:1982, genre:"fantasy" },
    { title: "Rok 1984", author:"George Orwell", isbn:9788381884334, year:1954, genre:"science fiction" },
    { title: "Marsjanin", author:"Andy Weir", isbn:9788328705326, year:2014, genre:"science fiction" },
    { title: "Wiedźmin: Ostatnie życzenie", author:"Andrzej Sapkowski", isbn:9788375780635, year:1994, genre:"fantasy" }
  ];
  selectedBook: Book | null = null
  isEdit = false
  isAdd = false

  book: Book = {
    title: '',
    author: '',
    isbn: 1,
    year: 1,
    genre: ''
  }

  editBook(book: Book) {
    this.isEdit = true;
    this.selectedBook = {...book}
  }

  onAddBook() {
    this.isAdd = true
  }

  cancelAdd() {
    this.isAdd = false
  }

  onEditBook() {
    this.isEdit = true;
  }
  cancelEdit() {
    this.isEdit = false
    this.selectedBook = null
  }
  saveBook(editedBook: Book) {
    if (this.selectedBook) {
      const isbn = this.selectedBook.isbn
      if (isbn) {
        this.books.forEach((book, index) => {
          if (book.isbn === isbn) {
            this.books[index] = editedBook
          }
        })
      }
      this.cancelEdit();
    }
  }

  addBook(addedBook: Book) {
    const bookToAdd: Book = {
      title: addedBook.title,
      author: addedBook.author,
      isbn: addedBook.isbn,
      year: addedBook.year,
      genre: addedBook.genre
    }
    this.books.push(bookToAdd)
    this.isAdd = false
    this.book = {
      title: '',
      author: '',
      isbn: 0,
      year: 0,
      genre: ''
    }
  }

  removeBook(bookTodelete: Book) {
      const isbn = bookTodelete.isbn
      if (isbn) {
        this.books.forEach( (book, index) => {
          if (book.isbn === isbn) {
            this.books.splice(index,1)
          }
        })
      }
  }
}

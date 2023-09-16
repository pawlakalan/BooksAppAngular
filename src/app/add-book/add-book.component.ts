import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../home/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Input() book: Book = {
    title: '',
    author: '',
    isbn: 1,
    year: 1,
    genre: ''
  }
  @Input() isAdd = false;
  @Output() addBook = new EventEmitter<Book>();
  @Output() cancelAdd = new EventEmitter<void>();
}

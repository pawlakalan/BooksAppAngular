import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../home/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() book: Book | null = null;
  @Input() isEdit = false;
  @Output() editBook = new EventEmitter<void>();
  @Output() saveBook = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();
}

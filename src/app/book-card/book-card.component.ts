import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  
  @Input() book: Book = {
    bookTitle: '',
    bookAuthor: '',
    noOfPages: 0,
    haveRead: false
  }
  @Input() index: number = 0
  @Output() deletingBook = new EventEmitter<number>()

  deleteBook(i: number) {   
    this.deletingBook.emit(i)
  }
}

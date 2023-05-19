import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  
  @Input() bookTitle: string = ''
  @Input() index: number = 0
  @Output() deletingBook = new EventEmitter<number>()

  deleteBook(i: number) {   
    this.deletingBook.emit(i)
  }
}

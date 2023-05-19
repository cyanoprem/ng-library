import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  bookTitle: string = 'Sales EQ'
  author: string = 'Jeb Blount'
  noOfPages: number = 288;
}

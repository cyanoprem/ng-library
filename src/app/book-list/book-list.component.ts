import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Book } from '../shared/book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  booksArray: Book[] = [];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {booksArray: []},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.booksArray.push(result);      
    });
  }

  deleteBook(index: number) {
    this.booksArray.splice(index, 1);
  }

}

import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'feedback-form';
  comment: string;
  rating = 0;
  showFeedback = false;

  send(): any {
    if (this.rating === undefined || !this.comment) {
      alert('Please choose a rating and drop a comment!');
    } else {
      alert(
        'Feedback sent!\nRating: ' + this.rating + '\nComment: ' + this.comment
      );
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Feature Feedback';

  rating = 0;
  canSend = false;
  comment: string;

  showFeedback = true;

  URL: string = 'http://something.com';

  setRating(rating: number) {
    this.rating = rating;
    this.validate(this.comment);
  }

  validate(event: string) {
    if (this.rating > 0 && event.trim().length > 0) {
      this.canSend = true;
    } else {
      this.canSend = false;
    }
  }

  send(): any {
    alert(
      'Feedback sent!\nRating: ' + this.rating + '\nComment: ' + this.comment
    );
  }
}

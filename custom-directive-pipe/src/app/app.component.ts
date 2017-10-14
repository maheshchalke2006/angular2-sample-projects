import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  message = 'This is java';

  todayDate = new Date();

  // rate = [88, 11, 33, 2, 81, 10000, 1];
  rate = [1 , 3 , 2 , 6 , 5 , 4];

  multilineText = `Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.`;
  limit = 20;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dibo-courses';

  course={
    title:'Angular course',
    description:'Practical Angular course by DIBO',
    author: 'Sherif Eldeeb'
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    title: 'angular-course'
  }

  onClick() {
    console.log('clicked');
  }

  onKeyUp(inputValue: string) {
    console.log(inputValue)
  }
}

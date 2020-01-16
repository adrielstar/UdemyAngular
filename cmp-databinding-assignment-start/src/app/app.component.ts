import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events:number[] = [];

  onEventEmitted(eventData:{number: number}) {
    this.events.push(eventData.number);
  }

  isEven(number: number):boolean{
    return number % 2 == 0;
  }

}

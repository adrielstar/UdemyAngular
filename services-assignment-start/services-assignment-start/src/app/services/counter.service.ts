import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  changeCount = 0;

  onChange() {
    this.changeCount ++;
    console.log(this.changeCount);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  enableButton: boolean = true;
  userName: string = "RIKY";
  newUsername: String = " "

  constructor() {
   }

  ngOnInit() {
  }

  /**
 * The onResetButtonClick will update the newUsername instance and
 * will make the input value empty and disable the button 
 */
  onResetButtonClick(){
    this.newUsername = this.userName;
    this.enableButton = false;
    this.userName = '';
  }
  
 /**
   *  The onUpdateUserName will check if the input value is empty.
   * 
   * @param event get the input value

   */
  onUpdateUserName(event: any){
    if (this.userName === '') {
      this.enableButton = false;
    }else{
      this.enableButton = true;
    }
  }

}

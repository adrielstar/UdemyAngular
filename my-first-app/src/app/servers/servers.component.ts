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

  onResetButtonClick(){
    this.newUsername = this.userName;
    this.enableButton = false;
    this.userName = '';
  }
  onUpdateUserName(event: any){
    if (this.userName === '') {
      this.enableButton = false;
    }else{
      this.enableButton = true;
    }
  }

}

import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Username:any;
  Password:any;

  constructor(private userservice:UserService){
   // this.login();
  }


  login() {
    return this.userservice.login({
      Username: this.Username,
      Password: this.Password
    });
  }
}

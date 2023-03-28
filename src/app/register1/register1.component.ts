import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component {
  Username:any;
  Password:any;
  ConfirmPassword:any;

  constructor(private userservice:UserService){
   // this.login();
  }

   register() {
    return this.userservice.register({
      Username: this.Username,
      Password: this.Password,
      ConfirmPassword:this.ConfirmPassword
    });
  }
}

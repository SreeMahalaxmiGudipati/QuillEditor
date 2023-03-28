import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuillEditor';
  Username:any;

  constructor(private userservice:UserService,private http:HttpClient){}

  async ngOnInit(){
   const user = await this.userservice.loadUser();
    this.Username=user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log(user);
  }

  logOut(){
     return this.userservice.logOut();
  }
}

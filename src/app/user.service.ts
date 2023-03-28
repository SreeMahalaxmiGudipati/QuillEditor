import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fn!:string;
  ln!:string;
   user:any;
   isUserLogged: boolean=false;
  
    constructor(private http:HttpClient,private router:Router,private authservice:AuthService) { 
    
    }
  
     async loadUser(){
      const user=await firstValueFrom(
        this.http.get<any>("api/user")
      )
     
       if('user_id' in user){
          this.user = user;
       }
     //  console.log(user['username']);
       
      return user;
    }
  
  
    login(loginForm:any){
  
      this.http.post<any>("api/login", loginForm, { withCredentials: true })
      .subscribe(
          (response) => {
              this.loadUser();
              console.log(this.loadUser());
              this.isUserLogged=true;
              this.authservice.isUserloggedAuthService=true;
              console.log("logged  in");
              console.log(this.isUserLogged);
              this.router.navigate(['/both']);
          },
          (error) => {
              console.log(error);
          }
      );
  }
  
  logOut(){
    this.http.get<any>("/api/logout").subscribe(_ => this.user=null);
    this.isUserLogged=false;
    this.authservice.isUserloggedAuthService=false;
  }
  
    register(RegisterForm:any){
  
      this.http.post<any>("/api/register", RegisterForm, { withCredentials: true })
      .subscribe(
          (response) => {
              this.loadUser();
              console.log(this.loadUser());
          },
          (error) => {
              console.log(error);
          }
      );
    }

}

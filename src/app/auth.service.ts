import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 public isUserloggedAuthService: boolean=false;
  isUserLoggedIn(){

    if(this.isUserloggedAuthService == true)
        return true;
    else{
      return false;
    }
    
  }
}

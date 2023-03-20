import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fn!:string;
  ln!:string;

  constructor() {
    console.log(this.fn);
    console.log(this.ln);
   }


}

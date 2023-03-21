import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit{

  editorContent!: string ;
  user=new User();
  constructor(public userService:UserService){

  }
  ngOnInit(){
    
  }
}

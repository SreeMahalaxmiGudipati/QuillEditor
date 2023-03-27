import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit{

  editorContent!: string ;
  constructor(public userService:UserService){

  }
  ngOnInit(){
    
  }
}

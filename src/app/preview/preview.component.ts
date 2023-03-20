import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit{

  editorContent!: string ;
  user=new User();
  ngOnInit(){
    console.log(this.user.firstname);
    console.log(this.user.lastname);
  }
}

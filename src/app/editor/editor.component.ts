import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{

  quillForm!:FormGroup;
  contentgiven!:string;

  editorStyle={
    height:'300px',
    backgroundColor: 'white'
  }
  ngOnInit(){
    this.quillForm=new  FormGroup({
      'editor':new FormControl(null)
    });
  }
  Onsubmit(){
    this.contentgiven=this.quillForm.get('editor')?.value;
    console.log(this.quillForm.get('editor')?.value);
  }
}

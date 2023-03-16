import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{

  quillForm!:FormGroup;
  contentgiven!:string;
  changeEditor(event : EditorChangeContent | EditorChangeSelection){
    // console.log(event);
    this.contentgiven=event['editor']['root']['innerHTML'];
    console.log(this.quillForm.get('editor')?.value);
  }
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
    // console.log(this.quillForm.get('editor')?.value);
  }
}

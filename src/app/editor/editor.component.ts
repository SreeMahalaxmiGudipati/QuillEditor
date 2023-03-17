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

  copyContentwithSourceCode(){
  const  preview = document.createElement('div');
  preview.innerHTML = this.contentgiven;
 const html = preview.innerHTML;
  const temparea = document.createElement('textarea');
 temparea.textContent = html;
  document.body.appendChild(temparea);
 temparea.select();
 document.execCommand('copy');
  document.body.removeChild(temparea);
  }

  copyContent(){
    
    const preview = document.createElement('div');
  preview.innerHTML = this.contentgiven;
  document.body.appendChild(preview);
           const range = document.createRange();
  range.selectNodeContents(preview);
  const selection = window.getSelection();
   selection?.removeAllRanges();
   selection?.addRange(range);
  document.execCommand('copy');
  document.body.removeChild(preview);
  }
}

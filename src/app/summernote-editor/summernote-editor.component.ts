import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit{

  editorContent!: string;
  previewContent!:string;

  user = new User();

  public UserForm=new FormGroup({

    FirstName:new FormControl(''),
    LastName:new FormControl(),
    
   });

   save(){
    
    console.log(this.user.firstname);
    console.log(this.user.lastname);
   }

  ngOnInit(): void {

    $('#summernote').summernote(
      {
        callbacks: {
          onChange: (content: string, $editable: any) => {
           $('#preview').html(content);
           this.previewContent = $('#preview').val(content);
           console.log(typeof(this.previewContent));
          const storageString = JSON.stringify(this.previewContent);
          console.log(storageString);
          localStorage.setItem('Preview Content', storageString); 
          }
        },
      height: 350,
       width:800
      },
     
    );
    let value1 = localStorage.getItem('Preview Content');
    console.log(value1);
   let str = value1;
   str = String(str);
   var obj=JSON.parse(str);
   console.log(obj); 
   console.log(obj[0].value);

    if(value1){
     $('#previewprevious').html(obj[0].value);
    }
   

  }

  copyContent(){
    const previewContent: string = $('#preview').text();
    const tempTextArea = $('<textarea></textarea>');
    tempTextArea.val(previewContent).css('opacity', '0');
    $('body').append(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    tempTextArea.remove();
    

  }

  copyContentwithSourceCode(){

    const previewContent: string = $('#preview').html();
    const tempTextArea = $('<textarea></textarea>');
    tempTextArea.val(previewContent).css('opacity', '0');
    $('body').append(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    tempTextArea.remove();
   
  }
}

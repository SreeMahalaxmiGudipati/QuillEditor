import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit{

  editorContent!: string;
  previewContent!:string;
  constructor(public userService:UserService){

  }

  user = new User();

   save(){
    console.log(this.user.firstname);
    console.log(this.user.lastname);
    this.userService.fn=this.user.firstname;
    this.userService.ln=this.user.lastname;
   }

  ngOnInit(): void {

    $('#summernote').summernote(
      {
        callbacks: {
          onInit: function() {
            $('#summernote').summernote('code', '<div id="op-firstname">FirstName</div><div><b><br></b></div><div><b><br></b></div><div><b><i>LastName</i></b></div>');
            $('#summernote').summernote('codeview.activate');
          },
          onChange: (content: string, $editable: any) => {
           $('#preview').html(content);
           this.previewContent = $('#preview').val(content);
           console.log(typeof(this.previewContent));
          const storageString = JSON.stringify(this.previewContent);
          console.log(storageString);
          localStorage.setItem('Preview Content', storageString);          
          },
        },
      height: 350,
       width:800
      },

      $('#firstname').on('input',()=>{
      let fn = $('#firstname').val();
    let ln = $('#lastname').val();
    let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i>${ ln }</i></b></div>`;
    $('#summernote').summernote('code',template);
        }),

    $('#lastname').on('input',()=>{
      let fn = $('#firstname').val();
        let ln = $('#lastname').val();
        let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i>${ ln }</i></b></div>`;
        $('#summernote').summernote('code',template);
      })
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

  ChangeContentInSummernote() {
  let fn = $('#firstname').val();
    let ln = $('#lastname').val();
    let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i>${ ln }</i></b></div>`;
    $('#summernote').summernote('code',template);
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
function ChangeContentInSummernote() {
  throw new Error('Function not implemented.');
}


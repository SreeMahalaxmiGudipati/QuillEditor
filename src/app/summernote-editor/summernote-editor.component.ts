import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit{

  nameForm!: FormGroup;

  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.nameForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
    
    $('#summernote').summernote(
      {
        callbacks: {
          onInit: function() {
        //    $('#summernote').summernote('code', '<div id="op-firstname">Firstname</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">LastName</i></b></div>');
        $('#summernote').summernote('code', '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>');
        $('#summernote').summernote('codeview.activate');
          },
          onChange: (content: string, $editable: any) => {
           $('#preview').html(content);
           this.previewContent = $('#preview').val(content);
          const storageString = JSON.stringify(this.previewContent);
          localStorage.setItem('Preview Content', storageString);  

          // let SourceCode = $('<div>').html(content);
          //  let first =SourceCode.find("#op-firstname");
          // let last =SourceCode.find('#op-lastname');

          // $('#firstname').val(first.text());
          //  $('#lastname').val(last.text());       
          
     
          },

        },
        
      height: 350,
       width:800,
   //    disable:true
      },

           $('#firstname, #lastname').on('input',()=>{

            var pattern = /{{\s*(\w+)\s*}}/g;

       let template='<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>';
            var matches = template.match(pattern);
            console.log(matches);
            if (matches) {
              matches.forEach((match) => {
                var variable = match.replace('{{', '').replace('}}', '').trim();
                // console.log(variable);
                // console.log(match);

                if (variable === 'firstname1') {
                  
                 let fn = $('#firstname').val();
                 console.log(fn);
                  
                 template = template.replace(match, fn);

              }
              if (variable === 'lastname1') {
                  
                let ln = $('#lastname').val();
                console.log(ln);
                 
                template = template.replace(match, ln);
             }
              })
            }
          
            $('#summernote').summernote('code', template);
          }),
     
     
        

    //   $('#firstname').on('input',()=>{
    //   let fn = $('#firstname').val();
    // let ln = $('#lastname').val();
    // let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">${ ln }</i></b></div>`;
    // $('#summernote').summernote('code',template);
    //     }),

    // $('#lastname').on('input',()=>{
    //   let fn = $('#firstname').val();
    //     let ln = $('#lastname').val();
    //     let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">${ ln }</i></b></div>`;
    //     $('#summernote').summernote('code',template);
    //   })
      
      );

    let value1 = localStorage.getItem('Preview Content');
  //  console.log(value1);
   let str = value1;
   str = String(str);
   var obj=JSON.parse(str);
 //  console.log(obj); 
   console.log(obj[0].value);

    if(value1){
     $('#previewprevious').html(obj[0].value);
    }
   
  }

  ChangeContentInSummernote() {
  let fn = $('#firstname').val();
    let ln = $('#lastname').val();
    let template = `<div id="op-firstname">${ fn }</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">${ ln }</i></b></div>`;
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


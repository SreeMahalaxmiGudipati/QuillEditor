import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-form-generate',
  templateUrl: './form-generate.component.html',
  styleUrls: ['./form-generate.component.css']
})
export class FormGenerateComponent implements OnInit{

  form!: FormGroup;
  values!: FormArray<FormControl>;
  
  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;
  fieldNames: string[] = ['firstname', 'lastname'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.initializeForm();
    this.logIds();
    
    let template='<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>';

    $('#summernote').summernote(
      {
        callbacks: {
          onInit: function() {
        $('#summernote').summernote('code', template);
          },
          onChange: (content: string, $editable: any) => {
           $('#preview').html(content);
           this.previewContent = $('#preview').val(content);
          const storageString = JSON.stringify(this.previewContent);
          localStorage.setItem('Preview Content', storageString);  

          },

        },
        
      height: 350,
       width:800
      },
      
      );
     
   
  }

  onValueChange(index: number, value: string,fieldIndex: number) {
    console.log(`Value ${index + 1} changed to ${value}`);
    let pattern = /{{\s*(\w+)\s*}}/g;
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>';

    let matches = template.match(pattern);
    console.log(matches);
    if (matches) {
      matches.forEach((match) => {

        let variable = match.replace('{{', '').replace('}}', '').trim();
   //     console.log(variable);

        if (variable === this.fieldNames[fieldIndex] + '1'  && index === fieldIndex) {
          console.log(fieldIndex);
          template = template.replace(match, value);
          console.log(value);
        }
  

      });
    }


    $('#summernote').summernote('code', template);
  }
  
 

  initializeForm() {
  
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>';
    const interpolationTagsCount = (template.match(/\{\{[^{}]+\}\}/g) || []).length;
    this.values = new FormArray<FormControl>([]);
    for (let i = 0; i < interpolationTagsCount; i++) {
      this.values.push(new FormControl(''));
      
    }
    this.form = new FormGroup({
      values: this.values
    });
  
  }

  get valueControls() {
    return (this.form.get('values') as FormArray).controls;
  }
  
  logIds() {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    console.log(`First name input field id: ${firstname ? firstname.id : 'Not found'}`);
    console.log(`Last name input field id: ${lastname ? lastname.id : 'Not found'}`);
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


import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  fieldNames: string[] = ['firstname', 'lastname','name'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.initializeForm();
   // this.logIds();
    
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

  // onValueChange(index: number, value: string, fieldIndex: number) {

  //   let pattern = /{{\s*(\w+)\s*}}/g;
  //   let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div>';

  //   let matches = template.match(pattern);
  //   console.log(matches);
  //   if (matches) {
  //     matches.forEach((match) => {

  //       let variable = match.replace('{{', '').replace('}}', '').trim();
  //       console.log(variable);

  //       if (variable === this.fieldNames[index] + '1'  && index === fieldIndex) {
  //         console.log(fieldIndex);
  //         template = template.replace(match, value);
  //         console.log(value);
  //       }

  //       // if (variable === 'firstname1' && index === fieldIndex) {
  //       //   console.log(fieldIndex);
  //       //   template = template.replace(match, value);
  //       //   console.log(value);
  //       // }

  //       // if (variable === 'lastname1' && index === fieldIndex) {
  //       //   console.log(fieldIndex);
  //       //   template = template.replace(match, value);
  //       //   console.log(value);
  //       // }

  //     //   if (variable === 'firstname1' && index==0) {
          
  //     //     console.log(fieldIndex);
  //     // //    console.log(match);
  //     //     template = template.replace(match, value);
  //     //     console.log(value);
  //     //     $('#summernote').summernote('code', template);
  //     //   }

  //     //   if (variable === 'lastname1' && index==1) {
  //     //     console.log(fieldIndex);
  //     //    // console.log(match);
  //     //     template = template.replace(match, value);
  //     //     console.log(value);
  //     //     $('#summernote').summernote('code', template);
  //     //   }

  //     });
  //   }

  //   $('#summernote').summernote('code', template);
  // }

  onValueChange(index: number, value: string, fieldIndex: number) {
    const pattern = /{{\s*(\w+)\s*}}/g;
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div><div><b><br></b></div><div><b><i>{{ name1 }}</i></b></div>';
  
    const matches = template.match(pattern);
    console.log(matches);
  
    if (matches) {

      matches.forEach((match) => {
        const variable = match.replace('{{', '').replace('}}', '').trim();
        console.log(variable);
        
        if (variable === this.fieldNames[index] + '1' && index === fieldIndex) {
          template = template.replace(match, value);
        } 
        else {
          const controlIndex = this.fieldNames.findIndex(name => name + '1' === variable);
          console.log(controlIndex);
          const controlValue = this.valueControls[controlIndex].value;
          console.log(controlValue);
          template = template.replace(match, controlValue);
        }
      });
    }
  
    $('#summernote').summernote('code', template);
  }
  
  
  initializeForm() {
  
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div><div><b><br></b></div><div><b><i>{{ name1 }}</i></b></div>';
    const interpolationTagsCount = (template.match(/\{\{[^{}]+\}\}/g) || []).length;
    this.values = new FormArray<FormControl>([]);
    for (let i = 0; i < interpolationTagsCount; i++) {
      this.values.push(new FormControl(''));
      
    }
    this.form = new FormGroup({
      values: this.values
     
    });
    // console.log(this.values);
  }

  get valueControls() {
    return (this.form.get('values') as FormArray).controls;
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


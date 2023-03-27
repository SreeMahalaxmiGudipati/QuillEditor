import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit{

  form!: FormGroup;
  values!: FormArray<FormControl>;

  fieldNames: string[] = ['firstname', 'lastname','name'];
  Names:string[] =['Firstname','Lastname','Name']

  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;

  constructor() {}

  ngOnInit(): void {


    this.initializeForm();
    
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div><div><b><br></b></div><div><b><i>{{ name1 }}</i></b></div>';
  //  let template='<div id="op-firstname">Firstname</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">LastName</i></b></div>';

    $('#summernote').summernote(
      {
        callbacks: {
          onInit: function() {
        $('#summernote').summernote('code', template);
        $('#summernote').summernote('disable');
    //    $('#summernote').summernote('codeview.activate');
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
      let value1 = localStorage.getItem('Preview Content');
      //  console.log(value1);
       let str = value1;
       str = String(str);
       var obj=JSON.parse(str);
       console.log(obj); 
       console.log(obj[0].value);
    
        if(value1){
         $('#previewprevious').html(obj[0].value);
        }
  }

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
          $('#summernote').summernote('code', template);
        } 

        else {
          const controlIndex = this.fieldNames.findIndex(name => name + '1' === variable);
       //   console.log(controlIndex);
          const controlValue = this.valueControls[controlIndex].value;
          template = template.replace(match, controlValue);
          $('#summernote').summernote('code', template);
        }
      });
    }
  
    $('#summernote').summernote('code', template);
    (content: string, $editable: any) => {
      $('#preview').html(content);
      this.previewContent = $('#preview').val(content);
     const storageString = JSON.stringify(this.previewContent);
     console.log(storageString);
     localStorage.setItem('Preview Content', storageString);  
    }
    let value1 = localStorage.getItem('Preview Content');
    console.log("Value1");
     console.log(value1);
     let str = value1;
     str = String(str);
     var obj=JSON.parse(str);
   //  console.log(obj); 
  //   console.log(obj[0].value);
  
      if(value1){
       $('#previewprevious').html(obj[0].value);
      }
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


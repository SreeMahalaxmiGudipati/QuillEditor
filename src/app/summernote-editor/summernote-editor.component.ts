import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit {
  content!: string;

 // @ViewChild('summernote') summernote: any;
  form!: FormGroup;
  values!: FormArray<FormControl>;

  fieldNames: string[] = ['firstname', 'lastname','name'];
  Names:string[] =['Firstname','Lastname','Name'];
  variablenames :string[] =[];
  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;

  constructor(private authservice:AuthService) {

  }

  ngOnInit(): void {

    this.initializeForm();
    this.authservice.isUserloggedAuthService=true;
    
    let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div><div><b><br></b></div><div><b><i>{{ name1 }}</i></b></div>';
  //  let template='<div id="op-firstname">Firstname</div><div><b><br></b></div><div><b><br></b></div><div><b><i id="op-lastname">LastName</i></b></div>';


  $('#summernote').summernote(
    {
      callbacks: {
        onInit: function() {
      $('#summernote').summernote('code', template);
      var code=$('#summernote').summernote('code');
      console.log("Code",code);
      var codeView = $('#summernote').summernote('codeview.get');
    console.log("Codee",codeView);
   //   $('#summernote').summernote('disable');
   $('#summernote').summernote('codeview.activate');
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
      //  template=template.replace('{{ firstname1 }}',"hello");
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
         this.variablenames.push(variable);
       
        console.log("variablenames",this.variablenames);
        
        if (variable === this.variablenames[index] && index === fieldIndex) {
          template = template.replace(match, value);
          $('#summernote').summernote('code', template);
        } 

        else {
          const controlIndex = this.variablenames.findIndex(name => name === variable);
       //   console.log(controlIndex);
          const controlValue = this.valueControls[controlIndex].value;
          template = template.replace(match, controlValue);
          $('#summernote').summernote('code', template);
        }
      });
    }
  
    $('#summernote').summernote('code', template);
    $('#preview').html(template);
    this.previewContent = $('#preview').val(template);
   const storageString = JSON.stringify(this.previewContent);
   localStorage.setItem('Preview Content', storageString);          

  let value1 = localStorage.getItem('Preview Content');
  //  console.log(value1);
   let str = value1;
   str = String(str);
   var obj=JSON.parse(str);
   console.log(obj); 
   console.log(obj[0].value);

    if(value1){
      template=template.replace('{{ firstname1 }}',"hello");
     $('#previewprevious').html(obj[0].value);
    }
  
  }
  

  // onValueChange(index: number, value: string, fieldIndex: number) {
  //   const pattern = /{{\s*(\w+)\s*}}/g;
  //   let template = '<div>{{ firstname1 }}</div><div><b><br></b></div><div><b><br></b></div><div><b><i>{{ lastname1 }}</i></b></div><div><b><br></b></div><div><b><i>{{ name1 }}</i></b></div>';
  
  //   const matches = template.match(pattern);
  //   console.log(matches);
  
  //   if (matches) {

  //     matches.forEach((match) => {
  //       const variable = match.replace('{{', '').replace('}}', '').trim();

  //       console.log(variable);
  //        this.variablenames.push(variable);
       
  //       console.log("variablenames",this.variablenames);
        
  //       if (variable === this.variablenames[index]  && index === fieldIndex) {
  //         template = template.replace(match, value);
  //         $('#summernote').summernote('code', template);
  //       } 

  //       else {
  //         const controlIndex = this.variablenames.findIndex(name => name === variable);
  //      //   console.log(controlIndex);
  //         const controlValue = this.valueControls[controlIndex].value;
  //         template = template.replace(match, controlValue);
  //         $('#summernote').summernote('code', template);
  //       }
  //     });
  //   }
  
  //   $('#summernote').summernote('code', template);
  //   var codeView = $('#summernote').summernote('codeview.getCode()');
  //   console.log("Codee",codeView);
  //   var code=$('#summernote').summernote('code');
  //     console.log("Code",code);
  //   onChange: (content: string, $editable: any) => {
  //   $('#preview').html(content);
  //     this.previewContent = $('#preview').val(content);
  //    const storageString = JSON.stringify(this.previewContent);
  //    localStorage.setItem('Preview Content', storageString);          

  //   let value1 = localStorage.getItem('Preview Content');
  //   //  console.log(value1);
  //    let str = value1;
  //    str = String(str);
  //    var obj=JSON.parse(str);
  //    console.log(obj); 
  //    console.log(obj[0].value);
  
  //     if(value1){
  //     //  template=template.replace('{{ firstname1 }}',"hello");
  //      $('#previewprevious').val(obj[0].value);
  //     }
  //   }
  // }
  
  
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

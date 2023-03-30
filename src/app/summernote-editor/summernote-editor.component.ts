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
  form!: FormGroup;
  values!: FormArray<FormControl>;
  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;
  fieldNames: string[] = [];
  constructor() {}


  ngOnInit(): void {

    const pattern = /{{\s*(\w+)\s*}}/g;
       
    let template=`
  <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
  <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
  <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
  <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
  <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`;


  //Dynamic labels
  const matches = template.match(pattern);
  if (matches) {
    matches.forEach((match) => {
      const variable = match.replace('{{', '').replace('}}', '').trim();
      this.fieldNames.push(variable);
     
    }
    )
  }

        this.initializeForm();
        $('#summernote').summernote(
          {
            callbacks: {
              onInit: function() {
            $('#summernote').summernote('code', template);
            $('#summernote').summernote('disable');
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
            if(value1)
            {
             $('#previewprevious').html(obj[0].value);
            }
      }

onValueChange(index: number, value: string, fieldIndex: number) {

    const pattern = /{{\s*(\w+)\s*}}/g;
  
    let template=`
      <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
      <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
      <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
      <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
      <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`

        const matches = template.match(pattern);
        console.log("MATCHES :",matches);
        if (matches) {
          matches.forEach((match) => {
            const variable = match.replace('{{', '').replace('}}', '').trim();
            console.log("VARIABLE :",variable);
            this.fieldNames.push(variable);
            console.log("FIELD NAMES :",this.fieldNames);
            if (variable === this.fieldNames[index] && index === fieldIndex)
            {
              template = template.replace(match, value);
              $('#summernote').summernote('code', template);
            }
            else
            {
              const controlIndex = this.fieldNames.findIndex(name => name === variable);
              console.log(controlIndex);
              const controlValue = this.valueControls[controlIndex].value;
              console.log(controlValue);
              template = template.replace(match, controlValue);
              // $('#summernote').summernote('code', template);
            }
          });
        }
        
        $('#summernote').summernote('code', template);
       
      }

  initializeForm() {

    let template=`
    <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
    <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
    <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
    <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
    <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`


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

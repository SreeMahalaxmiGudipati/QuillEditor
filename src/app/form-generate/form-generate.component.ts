import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Template } from 'src/models/template.model';
import { ModelserviceService } from '../modelservice.service';
import { UserService } from '../user.service';
declare var $: any;

@Component({
  selector: 'app-form-generate',
  templateUrl: './form-generate.component.html',
  styleUrls: ['./form-generate.component.css']
})
export class FormGenerateComponent implements OnInit{
  content!: string;
  form!: FormGroup;
  values!: FormArray<FormControl>;
  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;
  fieldNames: string[] = [];

  selectedtemplate = new Template();

  data:any;
  id:any;

  constructor(private modelservice:ModelserviceService,private route:ActivatedRoute) {
  //   this.id=this.route.snapshot.params['id'];
  //   this.getTemplateById();
  //   let template=this.selectedtemplate.templates;
  // console.log("Template1",template);
   
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getTemplateById();
  }
  

  EditorIntegrate() {

  const pattern = /{{\s*(\w+)\s*}}/g;
       
  //   let template=`
  // <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
  // <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
  // <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
  // <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
  // <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`;

  let template=this.selectedtemplate.templates;
  console.log("Template1",template);

  //dynamic labels
  const matches = template.match(pattern);
  if (matches) {
    matches.forEach((match: string) => {
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
              let original=this.selectedtemplate.originalTemplates;
              console.log("Original template",original);
              $('#originalpreview').html(original);
              },
            },
            height: 350,
            width:800
          },
          );
          let original=this.selectedtemplate.originalTemplates;
          console.log("Original template",original);
          $('#originalpreview').val(original);
          // let value1 = localStorage.getItem('Preview Content');
          // //  console.log(value1);
          //  let str = value1;
          //  str = String(str);
          //  var obj=JSON.parse(str);
          //  console.log(obj);
          //  console.log(obj[0].value);
          //   if(value1)
          //   {
          //    $('#previewprevious').html(obj[0].value);
          //   }
          
      }

onValueChange(index: number, value: string, fieldIndex: number) {

    const pattern = /{{\s*(\w+)\s*}}/g;
  
    // let template=`
    //   <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
    //   <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
    //   <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
    //   <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
    //   <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`

    let template=this.selectedtemplate.templates;
  console.log("Template1",template);

  let original=this.selectedtemplate.originalTemplates;
  console.log("Original template",original);
  $('#originalpreview').html(original);

        const matches = template.match(pattern);
        console.log("MATCHES :",matches);
        if (matches) {
          matches.forEach((match: string) => {
            const variable = match.replace('{{', '').replace('}}', '').trim();
           
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

    // let template=`
    // <div style='display: flex; align-items: center;'><img src='{{ ImageURL }}' alt='User Image' height='120px' style='margin-right: 10px;'>
    // <div><div style='font-size:20px; color:#008000'><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div>
    // <div style='display: inline-block;'><h6>Mob: </h6></div><span style='display: inline-block;'>{{ ContactNo }}</span>
    // <div><i class='fab fa-twitter'></i><a> {{ TwitterLink }}</a></div>
    // <div><i class='fab fa-facebook'></i> {{ FacebookLink }}</div></div></div>`

    let template=this.selectedtemplate.templates;
  console.log("Template1",template);

  let original=this.selectedtemplate.originalTemplates;
  console.log("Original template",original);
  $('#originalpreview').html(original);

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

 

  setvalues(data:any){
    this.selectedtemplate.id=data.id;
    this.selectedtemplate.templates=data.templates;
    console.log(this.selectedtemplate.templates);
    console.log("Edit over");
    console.log(data);
    this.EditorIntegrate();
    
  }

  getTemplateById(){
    this.modelservice.getDetailsById(this.id).subscribe((data:any)=>
    {
      this.data=data;
      console.log(this.data);
      this.setvalues(this.data);
    })
  }

}


import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-socialdemo',
  templateUrl: './socialdemo.component.html',
  styleUrls: ['./socialdemo.component.css']
})
export class SocialdemoComponent {
  form!: FormGroup;
  values!: FormArray<FormControl>;
  editorContent!: string;
  previewContent!:string;
  SourcecodeInEditor!:string;
 
  fieldNames: string[] = [];

  array:string[]=['facebook','twitter'];

  ngOnInit(): void {
    const pattern = /{{\s*(\w+)\s*}}/g;
  
//dymaic lables
let template=`
  <div style="display: flex; align-items: center;">
  <img src="{{ imageUrl }}" alt="User Image" height="120px" style="margin-right: 10px;">
  <div>
    <div style="font-size:20px;"><b>{{ firstname }}</b> <b>{{ lastname }}</b></div>
    <div>{{ role }}</div>
    <div><h6>Phone: {{ MobileNumber }}</h6></div>
    <div>
    <button id="op-facebook"><a href="{{ facebook }}"><i class="fab fa-facebook"></i></a></button>
    </div>
   
  </div>
</div>`

    const matches = template.match(pattern);
    if (matches) {
      matches.forEach((match) => {
        const variable = match.replace('{{', '').replace('}}', '').trim();
        this.fieldNames.push(variable);
      
      }
      )
    }
    this.initializeForm();
    let template1 = `
    <div style="display: flex; align-items: center;">
      <img src="{{ imageUrl }}" alt="User Image" height="120px" style="margin-right: 10px;">
      <div>
        <div style="font-size:20px;"><b>{{ firstname }}</b> <b>{{ lastname }}</b></div>
        <div>{{ role }}</div>
        <div><h6>Call: {{ MobileNumber }}</h6></div>
        <div>
        <h3 id="op-facebook"></h3>
        </div>
      </div>
    </div>`
    $('#summernote').summernote(
      {
        callbacks: {
          onInit: function() {
        $('#summernote').summernote('code', template1);
        $('#summernote').summernote('disable');
          },
          onChange: (content: string, $editable: any) => {
           $('#preview').html(content);
           this.previewContent = $('#preview').val(content);
          const storageString = JSON.stringify(this.previewContent);
          localStorage.setItem('Preview Content', storageString);
          },
        },
      height: 200,
       width:800
      },
      );
      
  }

  onValueChange(index: number, value: string, fieldIndex: number) {
    const pattern = /{{\s*(\w+)\s*}}/g;
  
    let template1 = `
      <div style="display: flex; align-items: center;">
        <img src="{{ imageUrl }}" alt="User Image" height="120px" style="margin-right: 10px;">
        <div>
          <div style="font-size:20px;"><b>{{ firstname }}</b> <b>{{ lastname }}</b></div>
          <div>{{ role }}</div>
          <div><h6>Phone: {{ MobileNumber }}</h6></div>
          <div>
           <p id="op-facebook">{{ displayInput }}</p>
          </div>
        </div>
      </div>`;
      let template2 = `
      <div style="display: flex; align-items: center;">
        <img src="{{ imageUrl }}" alt="User Image" height="120px" style="margin-right: 10px;">
        <div>
          <div style="font-size:20px;"><b>{{ firstname }}</b> <b>{{ lastname }}</b></div>
          <div>{{ role }}</div>
          <div><h6>Phone: {{ MobileNumber }}</h6></div>
          <div>
          <a href="{{ displayInput }}"><i class="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>`

    const matches = template1.match(pattern);
    console.log("MATCHES :",matches);
  
    if (matches) {
      matches.forEach((match) => {

        const variable = match.replace('{{', '').replace('}}', '').trim();
        this.fieldNames.push(variable);
  console.log("variable",variable);
  

  // if (variable == 'displayInput' && match == '{{ displayInput }}' && fieldIndex === this.fieldNames.indexOf('displayInput')) 
  // {
  //   console.log("displayInput entered");
  //   let fn = $('#op-facebook').text();
  //              console.log(fn);
  //   console.log(IconCode);
  //   $('#op-facebook').html(IconCode);
  //  // console.log( $("#op-facebook").val(IconCode));
  //   $('#summernote').summernote('code', template2);
  // }

        if (variable === this.fieldNames[index]) {
          console.log(variable);
          template2 = template2.replace(match, value);
          $('#summernote').summernote('code', template2);

        } 
        
        else {
          
          console.log(match);
          const controlIndex = this.fieldNames.findIndex(name => name === variable);
        //  console.log(controlIndex);
          const controlValue = this.valueControls[controlIndex].value;
       //   console.log(controlValue);
          template2 = template2.replace(match, controlValue);
        }
      });
    }
  
    $('#summernote').summernote('code', template2);
  }
  
  
  initializeForm() {
   
    let template=`
  <div style="display: flex; align-items: center;">
  <img src="{{ imageUrl }}" alt="User Image" height="120px" style="margin-right: 10px;">
  <div>
    <div style="font-size:20px;"><b>{{ firstname }}</b> <b>{{ lastname }}</b></div>
    <div>{{ role }}</div>
    <div><h6>Phone: {{ MobileNumber }}</h6></div>
    <div>
      <button id="op-facebook"><a href="{{ Facebook }}"><i class="fab fa-facebook"></i></a></button>
    </div>
  </div>
</div>`
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
 

}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  styleUrls: ['./summernote-editor.component.css']
})
export class SummernoteEditorComponent implements OnInit{

  editorContent!: string;
  previewContent!:string;

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
    console.log(typeof(value1));
   // let [key, value] = Object.entries(value1)[0];
   
    if(value1){
     $('#previewprevious').html(value1);

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

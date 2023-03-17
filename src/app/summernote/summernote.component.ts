import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-summernote',
  templateUrl: './summernote.component.html',
  styleUrls: ['./summernote.component.css']
})
export class SummernoteComponent implements OnInit {

  content = '';
  editorContent!: string ;


  ngOnInit(): void {
    $('#summernote').summernote(
      {
        callbacks: {
          onChange: (content: string, $editable: any) => {
            this.editorContent = content;
          }
        },
        height: 400,
       width:800
      },
     
    );
  }
 
  copyContent(){

    const preview = document.createElement('div');
  preview.innerHTML = this.editorContent;
  document.body.appendChild(preview);
  const range = document.createRange();
  range.selectNodeContents(preview);
  
  const selection = window.getSelection();
   selection?.removeAllRanges();
   selection?.addRange(range);
  document.execCommand('copy');
  document.body.removeChild(preview);
  }

  copyContentwithSourceCode(){

    const  preview = document.createElement('div');
    preview.innerHTML = this.editorContent;
   const html = preview.innerHTML;
    const temparea = document.createElement('textarea');
   temparea.textContent = html;
    document.body.appendChild(temparea);
   temparea.select();
   document.execCommand('copy');
    document.body.removeChild(temparea);
  }


 

  
}

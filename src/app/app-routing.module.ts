import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BothComponent } from './both/both.component';
import { EditorComponent } from './editor/editor.component';
import { FormGenerateComponent } from './form-generate/form-generate.component';
import { PreviewComponent } from './preview/preview.component';
import { SummernoteEditorComponent } from './summernote-editor/summernote-editor.component';
import { SummernoteComponent } from './summernote/summernote.component';

const routes: Routes = [
  {path:'editor',component:EditorComponent},
  {path:'summer',component:SummernoteComponent},
  {path:'preview',component:PreviewComponent},
  {path:'both',component:BothComponent},
  {path:'summernoteEditor',component:SummernoteEditorComponent},
  {path:'formgenerate',component:FormGenerateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

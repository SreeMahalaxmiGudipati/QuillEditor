import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { SummernoteComponent } from './summernote/summernote.component';

const routes: Routes = [
  {path:'editor',component:EditorComponent},
  {path:'summer',component:SummernoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

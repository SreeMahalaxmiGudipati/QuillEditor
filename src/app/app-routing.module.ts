import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplatesComponent } from './all-templates/all-templates.component';
import { AuthGuard } from './auth.guard';
import { BackupformComponent } from './backupform/backupform.component';
import { BothComponent } from './both/both.component';
import { EditorComponent } from './editor/editor.component';
import { FormGenerateComponent } from './form-generate/form-generate.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { Register1Component } from './register1/register1.component';
import { SummernoteEditorComponent } from './summernote-editor/summernote-editor.component';
import { SummernoteComponent } from './summernote/summernote.component';

const routes: Routes = [
  {path:'editor',component:EditorComponent},
  {path:'summer',component:SummernoteComponent},
  {path:'preview',component:PreviewComponent},
//  {path:'both',component:BothComponent,canActivate:[AuthGuard]},
   {path:'both',component:BothComponent},
   {path:'both/:id',component:BothComponent},
    {path:'templates',component:AllTemplatesComponent},
  {path:'summernoteEditor',component:SummernoteEditorComponent},
  {path:'formgenerate',component:FormGenerateComponent},
  {path:'formgenerate/:id',component:FormGenerateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:Register1Component},
  {path:'both1',component:BackupformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

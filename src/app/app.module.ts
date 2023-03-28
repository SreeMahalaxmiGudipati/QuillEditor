import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { SummernoteComponent } from './summernote/summernote.component';
import { PreviewComponent } from './preview/preview.component';
import { BothComponent } from './both/both.component';
import { SummernoteEditorComponent } from './summernote-editor/summernote-editor.component';
import { FormGenerateComponent } from './form-generate/form-generate.component';
import { BackupformComponent } from './backupform/backupform.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { Register1Component } from './register1/register1.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SummernoteComponent,
    PreviewComponent,
    BothComponent,
    SummernoteEditorComponent,
    FormGenerateComponent,
    BackupformComponent,
    LoginComponent,
    Register1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

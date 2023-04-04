import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
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
import { ModelserviceService } from './modelservice.service';
import { AllTemplatesComponent } from './all-templates/all-templates.component';
import { SafePipe } from 'src/safe.pipe';
import { FriendlyService } from './friendly.service';
import { ProfessionalService } from './professional.service';
import { ModernService } from './modern.service';
import { ElegantService } from './elegant.service';
import { CreativeService } from './creative.service';
import { SocialdemoComponent } from './socialdemo/socialdemo.component';


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
    Register1Component,
    AllTemplatesComponent,
    SafePipe,
    SocialdemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [ModelserviceService,ProfessionalService,FriendlyService,ModernService,
    ElegantService,CreativeService,UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

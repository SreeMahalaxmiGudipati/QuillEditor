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


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SummernoteComponent,
    PreviewComponent,
    BothComponent,
    SummernoteEditorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

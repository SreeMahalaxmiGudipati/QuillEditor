import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummernoteEditorComponent } from './summernote-editor.component';

describe('SummernoteEditorComponent', () => {
  let component: SummernoteEditorComponent;
  let fixture: ComponentFixture<SummernoteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummernoteEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummernoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

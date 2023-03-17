import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummernoteComponent } from './summernote.component';

describe('SummernoteComponent', () => {
  let component: SummernoteComponent;
  let fixture: ComponentFixture<SummernoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummernoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

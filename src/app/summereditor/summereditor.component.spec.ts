import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummereditorComponent } from './summereditor.component';

describe('SummereditorComponent', () => {
  let component: SummereditorComponent;
  let fixture: ComponentFixture<SummereditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummereditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

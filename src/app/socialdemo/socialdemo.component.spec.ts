import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialdemoComponent } from './socialdemo.component';

describe('SocialdemoComponent', () => {
  let component: SocialdemoComponent;
  let fixture: ComponentFixture<SocialdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

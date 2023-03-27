import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupformComponent } from './backupform.component';

describe('BackupformComponent', () => {
  let component: BackupformComponent;
  let fixture: ComponentFixture<BackupformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCreationDialogComponent } from './script-creation-dialog.component';

describe('ScriptCreationDialogComponent', () => {
  let component: ScriptCreationDialogComponent;
  let fixture: ComponentFixture<ScriptCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptCreationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

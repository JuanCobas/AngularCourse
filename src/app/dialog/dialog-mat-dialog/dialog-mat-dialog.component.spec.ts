import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMatDialogComponent } from './dialog-mat-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DialogMatDialogComponent', () => {
  let component: DialogMatDialogComponent;
  let fixture: ComponentFixture<DialogMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogMatDialogComponent],
      providers: [ { provide: MAT_DIALOG_DATA, useValue: { text: 'Test text' } },
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

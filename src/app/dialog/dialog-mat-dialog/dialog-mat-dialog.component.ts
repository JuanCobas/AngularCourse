import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-mat-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-mat-dialog.component.html',
  styleUrl: './dialog-mat-dialog.component.css'
})
export class DialogMatDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {text: string},
  private dialogRef: MatDialogRef<DialogMatDialogComponent>
){
}

  

  onAccept(){
    this.dialogRef.close(true);
  }
  onCancel(){
    this.dialogRef.close(false);
  }
  
}

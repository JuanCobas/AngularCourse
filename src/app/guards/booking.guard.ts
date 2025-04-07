import { CanDeactivateFn } from '@angular/router';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { DialogMatDialogComponent } from '../dialog/dialog-mat-dialog/dialog-mat-dialog.component';
import { map } from 'rxjs';

export const bookingGuard: CanDeactivateFn<RoomsBookingComponent> = (component, currentRoute, currentState, nextState) => {
  component: RoomsBookingComponent;
  const dialog: MatDialog = inject(MatDialog);
  
  if(component.bookingForms.pristine){
    return component.bookingForms.pristine;
  }
  else {
    return dialog.open(DialogMatDialogComponent, {data: {text: 'The form is uncompleted'}}).afterClosed().pipe(map(result => result));
  }
  
};

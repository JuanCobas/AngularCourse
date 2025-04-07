import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { bookingGuard } from './booking.guard';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';

describe('bookingGuard', () => {
  const executeGuard: CanDeactivateFn<RoomsBookingComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

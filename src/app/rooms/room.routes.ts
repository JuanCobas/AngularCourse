import { Route } from "@angular/router";
import { RoomsAddComponent } from "./rooms-add/rooms-add.component";
import { RoomsBookingComponent } from "./rooms-booking/rooms-booking.component";
import { bookingGuard } from "../guards/booking.guard";


export const ROOM_ROUTES : Route[] = [

    {
        path: 'add', component: RoomsAddComponent
    },
    {
        path: ':id', component: RoomsBookingComponent, canDeactivate: [bookingGuard]
    }

]
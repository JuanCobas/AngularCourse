import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
   
    { path: 'rooms', component: RoomsComponent},
    { path: 'rooms/add', component: RoomsAddComponent}, 
    { path: 'employee', component: EmployeeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'rooms/:id', component: RoomsBookingComponent},
    { path: '', redirectTo: 'rooms', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
    

];

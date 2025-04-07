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
import { loginActivateGuard } from './guards/login-activate.guard';
import { loginMatchGuard } from './guards/login-match.guard';
import { roomGuard } from './rooms/room.guard';
import { CommentPageComponent } from './comment/commentPage/comment-page/comment-page.component';
import { commentResolver } from './comment/guards/comment.resolver';

export const routes: Routes = [
   
    //{ path: 'rooms/add', component: RoomsAddComponent},
 
    { 
        path: 'rooms', loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent) ,loadChildren: () => import('./rooms/room.routes').then(m => m.ROOM_ROUTES),
        canActivate: [loginActivateGuard], canMatch: [], canActivateChild: [roomGuard]       
    },
     
    { path: 'employee', component: EmployeeComponent, canActivate: [loginActivateGuard]},
    { path: 'login', component: LoginComponent},
    //{ path: 'rooms/:id', component: RoomsBookingComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'comments', component: CommentPageComponent, resolve:{ comments: commentResolver}},
    { path: '**', component: NotfoundComponent }
    
    
];

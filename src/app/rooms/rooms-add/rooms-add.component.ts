import { Component, Inject, inject } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomService } from '../services/room.service';
import { ConfigService } from '../../services/config.service';
import { ROUTE_CONFIG_TOKEN } from '../../services/routeConfig.service';

@Component({
  selector: 'app-rooms-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css',
  providers: [{
    provide: ROUTE_CONFIG_TOKEN, useValue: {title: 'ROOMADD'}
  }]
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0

  }
  
  constructor(private configService: ConfigService){

  }
  roomservice : RoomService = inject(RoomService);


  addRoom(roomform : NgForm){
    this.roomservice.addRoom(this.room).subscribe();
    roomform.resetForm(
      {
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0
    
      }
      
    );
  }
}

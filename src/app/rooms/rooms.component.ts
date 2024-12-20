import { Component, Input } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  @Input() show: any;
  @Input() title = '';
  hidden: boolean = false;

 rooms: Room = {
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5,
 }

 roomList: RoomList[] = [
  {
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditiones, Free Wi-Wi',
    price: 500,
    photos: 'https',
    checkingTime: new Date('11-10-21'),
    checkoutTime: new Date('12-10-21')
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditiones, Free Wi-Wi',
    price: 1000,
    photos: 'https',
    checkingTime: new Date('11-10-21'),
    checkoutTime: new Date('12-10-21')
  },
  {
    roomNumber: 3,
    roomType: 'Private Suit',
    amenities: 'Air Conditiones, Free Wi-Wi',
    price: 1500,
    photos: 'https',
    checkingTime: new Date('11-10-21'),
    checkoutTime: new Date('12-10-21')
  }
 ]

 

  toggle(): void {
    this.hidden = !this.hidden;
    this.show();
    
  }
}

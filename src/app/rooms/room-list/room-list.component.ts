import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Room, RoomList } from '../rooms';


@Component({
  selector: 'app-room-list',
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class RoomListComponent implements OnChanges, OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue;
    }
  }

  @Input() title: string = '';


  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>;

  selectRoom(room : RoomList) : void  {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('on destroy is called')
  }

  addRoom(){
    const room:RoomList = {
      roomNumber: '4',
      roomType: "deluxe",
      amenities: "wifi",
      price: 1500,
      photos: 'https',
      checkingTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 8.285
    };
    //this.roomList.push(room);
    this.rooms.push(room);
  }
   
}

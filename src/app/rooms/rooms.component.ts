import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.Default
   
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  @Input() show: any;
  @Input() title = '';
  hidden: boolean = true;

  

  
  selectRoom(room : RoomList):void {
    this.selectedRoom = room; 
  }

  selectedRoom!: RoomList; 
  
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

 ngOnInit() : void {
  // console.log(this.headerComponent);
  
  this.roomList = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditiones, Free Wi-Wi',
      price: 500,
      photos: 'https',
      checkingTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 5.554
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditiones, Free Wi-Wi',
      price: 1000,
      photos: 'https',
      checkingTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 4.467
    },
    {
      roomNumber: 3,
      roomType: 'Private Suit',
      amenities: 'Air Conditiones, Free Wi-Wi',
      price: 1500,
      photos: 'https',
      checkingTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 8.285
    }
  ]

 } 
 constructor(){

 }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    
    const second: HeaderComponent | undefined = this.headerChildrenComponent.get(1);
    if(second){
      second.title = "Segundo";
    }
     
  
    this.headerChildrenComponent.last.title = "Last Title";
    
    
  }
  ngDoCheck(): void {
    console.log("on changes is called");
  }
  ngAfterViewChecked(): void {
      console.log();
  }
 rooms: Room = {
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5,
 }

 roomList: RoomList[] = []

  addRoom(){
    const room:RoomList = {
      roomNumber: 4,
      roomType: "deluxe",
      amenities: "wifi",
      price: 1500,
      photos: 'https',
      checkingTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 8.285
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }

  title1: string = 'Room List';

  toggle(): void {
    this.hidden = !this.hidden;
    this.title1 = "Rooms List91"
    this.show;
    
   
  }
}

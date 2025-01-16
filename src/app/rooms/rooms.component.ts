import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from "../container/container.component";
import { RoomService } from './services/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  //providers: [RoomService]
   
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  @Input() show: any;
  @Input() title = '';
  hidden: boolean = true;

  

  stream = new Observable(observer => {
    observer.next('user1'),
    observer.next('user2'),
    observer.next('user3'),
    observer.complete()

  }
)

  
  selectRoom(room : RoomList):void {
    this.selectedRoom = room; 
  }

  selectedRoom!: RoomList; 
  
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  roomList: RoomList[] = []
 ngOnInit() : void {
  this.stream.subscribe({next: (value) => console.log(value), complete: () => console.log('complete'), error: (err) => console.log(err)});
  this.stream.subscribe((data) => console.log(data));
  this.roomService.getRooms().subscribe((rooms: RoomList[]) => this.roomList = rooms);
 }

 constructor(@SkipSelf() private roomService: RoomService){

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

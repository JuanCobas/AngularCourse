import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, Host, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren, ViewEncapsulation, Inject } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from "../container/container.component";
import { RoomService } from './services/room.service';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { ROUTE_CONFIG_TOKEN } from '../services/routeConfig.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomListComponent, HeaderComponent, RouterOutlet, ReactiveFormsModule, FilterPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: []
   
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() show: any;
  @Input() title = '';
  hidden: boolean = true;
  subscription! : Subscription;
  
  rooms$! : Observable<RoomList[]>;

  priceFilter = new FormControl(0);
  
  stream = new Observable(observer => {
    observer.next('user1'),
    observer.next('user2'),
    observer.next('user3'),
    observer.complete()

  }
)
  
  selectRoom(room : RoomList):void {
    this.selectedRoom = room;
    //console.log(this.selectedRoom);
  }

  selectedRoom!: RoomList; 

  totalBytes: number = 0;
  
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  roomList: RoomList[] = []
  

 ngOnInit() : void {
  this.roomService.getPhotos().subscribe((event) => {
    switch(event.type){
      case HttpEventType.Sent:{
        console.log("Request has been made!")
        break;
      }
      case HttpEventType.ResponseHeader: {
        console.log("Request Success!");
        break;
      }
      case HttpEventType.DownloadProgress: {
        this.totalBytes += event.loaded;
        break;
      }
      case HttpEventType.Response: {
        console.log(event.body);
      }

      }
    }

    
  );

  this.stream.subscribe({next: (value) => console.log(value), complete: () => console.log('complete'), error: (err) => console.log(err)});
  this.stream.subscribe((data) => console.log(data));
  //this.roomService.getRooms$.subscribe((rooms: RoomList[]) => this.roomList = rooms);
  this.rooms$ = this.roomService.getRooms().pipe(
    catchError((err) => {//console.log(err);
      this.error$.next(err.message);
      return of([]);
    }
  )
  )

  this.roomsCount$ = this.roomService.getRooms$.pipe(map((data: RoomList[]) => data.map(number => number.roomNumber as string)))
 }
 
 constructor(@SkipSelf() private roomService: RoomService, private configService: ConfigService){

 }

error$ : Subject<string> = new Subject<string>;
getError$ = this.error$.asObservable();

roomsCount$! : Observable<string[]>;

  ngAfterViewInit(): void {
    //this.headerComponent.title = "Rooms View";
    
    const second: HeaderComponent | undefined = this.headerChildrenComponent.get(1);
    if(second){
      second.title = "Segundo";
    }
     
    
    //this.headerChildrenComponent.last.title = "Last Title";
    
    
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
      //roomNumber: '4',
      roomType: "deluxe",
      amenities: "wifi",
      price: 1500,
      photos: 'https',
      checkinTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 8.285
    }
    //this.roomList.push(room);
    // this.roomList = [...this.roomList, room]
    this.roomService.addRoom(room).subscribe((data) => {this.roomList = data});
  }

  title1: string = 'Room List';

  toggle(): void {
    this.hidden = !this.hidden;
    this.title1 = "Rooms List91"
    this.show;
    
  }

  updateRoom(): void{
    const room:RoomList = {
      roomNumber: '1',
      roomType: "deluxe",
      amenities: "wifi",
      price: 1500,
      photos: 'https',
      checkinTime: new Date('11-10-21'),
      checkoutTime: new Date('12-10-21'),
      rating: 8.285
    }
    this.roomService.updateRoom(room).subscribe((data) => this.roomList = data);
  }

  deleteRoom(){
    this.roomService.deleteRoom('1').subscribe((data) => this.roomList = data);
  }

  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }
}

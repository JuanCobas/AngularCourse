import { AfterContentInit, Component, ComponentRef, ContentChild, Host, OnInit, Optional, Self, ViewChild} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomService } from '../rooms/services/room.service';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  //providers: [RoomService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(){

  }

  ngOnInit(): void {
      //this.rooms = this.roomService.getRooms();
  }

  rooms: RoomList[] = [];
  
  ngAfterContentInit(): void {
      console.log(this.employee);
      this.employee.empName = "Rick";
  }

}

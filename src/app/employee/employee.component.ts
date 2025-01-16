import { Component, Self } from '@angular/core';
import { RoomService } from '../rooms/services/room.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  //providers: [RoomService]
})
export class EmployeeComponent {

  constructor(private roomService: RoomService){

  }

  empName: string = 'John';
}

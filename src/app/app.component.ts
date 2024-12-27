import { Component } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FRONT';
  show(){
    console.log("Estoy")
  }

  role: string= "Admin";
}

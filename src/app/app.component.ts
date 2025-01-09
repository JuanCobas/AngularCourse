import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  imports: [RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FRONT';
  show(){
    console.log("Estoy")
  }

  role: string= "Admin";

  @ViewChild('name', {static: true}) name!: ElementRef;
  ngOnInit(): void {
      console.log(this.name.nativeElement.innerText = "Hilton Hotel");
  }

  @ViewChild(RoomsComponent) roomComponent!: RoomsComponent;

  // @ViewChild('user', {read:ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void {

    this.roomComponent.title = "Front Cambiado"
      
  }
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.rooms.totalRooms = 50;
  // }
}

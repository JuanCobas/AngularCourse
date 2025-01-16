import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token'


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

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage
){

  }
  role: string= "Admin";

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
      this.loggerService?.log('AppComponent.ngOnInit()')
      console.log(this.name.nativeElement.innerText = "Hilton Hotel");
      this.localStorage.setItem('name', 'Hilton Hotel');
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

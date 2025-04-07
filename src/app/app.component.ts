import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token'
import { InitService } from './init.service';
import { AppConfig } from './AppConfig/appconfig.interface';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { EventType, NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppNavComponent } from "./app-nav/app-nav.component";
import { ConfigService } from './services/config.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent, RouterLink, AppNavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FRONT';
  show(){
    console.log("Estoy")
  }

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage,
  private initService: InitService,
  @Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
  private configService: ConfigService,
  private router: Router
){
  console.log(this.initService.config);
  }
  role: string= "Admin";

  @ViewChild('name', {static: true}) name!: ElementRef;


  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => console.log('Navigation Started'));
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => console.log('Navigation Ended'));
    

      this.loggerService?.log('AppComponent.ngOnInit()')
      //console.log(this.name.nativeElement.innerText = "Hilton Hotel");
      this.localStorage.setItem('name', 'Hilton Hotel');
      
  }

  @ViewChild(RoomsComponent) roomComponent!: RoomsComponent;

  // @ViewChild('user', {read:ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void {

    //this.roomComponent.title = "Front Cambiado"
      
  }
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.rooms.totalRooms = 50;
  // }
}

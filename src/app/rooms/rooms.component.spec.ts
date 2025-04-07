import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomService } from './services/room.service';
import { ConfigService } from '../services/config.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ROUTE_CONFIG_TOKEN } from '../services/routeConfig.service';
import { Inject } from '@angular/core';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), RoomService, ConfigService, {provide: APP_SERVICE_CONFIG, useValue: {apiEndpoint: 'http://localhost:8080/api/v1'}}, {provide: ROUTE_CONFIG_TOKEN, useValue: {title: 'Home'}}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show text', () => {
    const routeConfig = TestBed.inject(ROUTE_CONFIG_TOKEN);
    expect(routeConfig.title).toBe('Home');
  })
});

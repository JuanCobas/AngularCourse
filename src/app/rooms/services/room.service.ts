import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
    
})
export class RoomService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(config.apiEndpoint);
    console.log('Room Service Initialized...');
   }

  roomList: RoomList[] = [
    
  ]
 

  getRooms(): Observable<RoomList[]>{
    return this.http.get<RoomList[]>(`/api/rooms/`)
  }
  addRoom(room: RoomList) {
    return this.http.post('/api/rooms', room)
  }
}

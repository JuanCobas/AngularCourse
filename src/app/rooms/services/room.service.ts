import { Inject, Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root',

    
})
export class RoomService {

  
  
  //headers = new HttpHeaders({'token': '12345jkl432n432n4'});
  
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(config.apiEndpoint);
    console.log('Room Service Initialized...');
    
    this.getRooms$ = this.http.get<RoomList[]>('/api/rooms/').pipe(
      shareReplay(1)
    )
   }

  roomList: RoomList[] = [
    
  ]
  
  
  getRooms$:Observable<RoomList[]>;

  getRooms(): Observable<RoomList[]>{
    
    return this.http.get<RoomList[]>(`/api/rooms/`);
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms/', room)
    
  }
  updateRoom(room: RoomList){
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room)
  }
  deleteRoom(id: string ){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }
  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,{
      reportProgress: true
    });
    return this.http.request(request);
  }

}

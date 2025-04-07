import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[], price: number | null): RoomList[] {
    if(price !== null){
      return rooms.filter((room) => {return room.price >= price});
    }
    else{
      return rooms;
    }
  }

}

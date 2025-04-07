import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  http: HttpClient = inject(HttpClient);

  bookRoom (booking: any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', booking);
  }
}

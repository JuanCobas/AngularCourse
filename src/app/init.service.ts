import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private http: HttpClient) {  
    
  }
  config: any;
  init() {
    return this.http.get('assets/config.json').pipe(tap(config => this.config = config))
  }
}

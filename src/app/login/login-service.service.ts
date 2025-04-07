import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {

  isLoggedIn : boolean = false;
  isAdmin: boolean = false;

  constructor() { }



  login(username: string, password: string): boolean {
    if (username === 'admin@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(username === 'user@gmail.com' && password === 'user'){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}

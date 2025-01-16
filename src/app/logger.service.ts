import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { 

    console.log("Logger Service")
  }

  log(msg: string){
    console.log(msg);
  }
}

import { Inject, Injectable } from '@angular/core';
import { ROUTE_CONFIG_TOKEN } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(ROUTE_CONFIG_TOKEN) private routeConfig: RouteConfig) { 
    console.log('ConfigService');
    console.log(this.routeConfig);
  }
}

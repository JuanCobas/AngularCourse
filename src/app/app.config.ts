import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, inject, Inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { ROUTE, ROUTE_CONFIG_TOKEN } from './services/routeConfig.service';
import { GlobalErrorHandler } from './errorHandler/globalErrorHandler';

const initFactory = () => {
  const config = inject(InitService);
  return () => config.init();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    {provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG},
    provideHttpClient(withInterceptors([requestInterceptor])),
    //{provide: APP_INITIALIZER, useFactory: initFactory, deps: [InitService], multi: true},
    provideAppInitializer(() => {
      const init = initFactory();
      return init();
      
    }),
    provideAnimationsAsync(),
    {
      provide: ROUTE_CONFIG_TOKEN, useValue: ROUTE
    },
    {
      provide: ErrorHandler, useClass: GlobalErrorHandler
    }
    

  ]
};

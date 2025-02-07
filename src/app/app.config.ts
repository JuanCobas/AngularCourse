import { APP_INITIALIZER, ApplicationConfig, inject, Inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

const initFactory = () => {
  const config = inject(InitService);
  return () => config.init();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG},
    provideHttpClient(withInterceptors([requestInterceptor])),
    //{provide: APP_INITIALIZER, useFactory: initFactory, deps: [InitService], multi: true},
    provideAppInitializer(() => {
      const init = initFactory();
      return init();
      
    }),
    provideAnimationsAsync(),
    

  ]
};

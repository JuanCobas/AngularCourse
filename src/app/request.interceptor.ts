import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  
  if(req.method === 'POST'){
    req = req.clone({headers: new HttpHeaders({'token': '123456789'})});
    return next(req);
  }
  
  console.log("Interceptor", req);
  return next(req);
};

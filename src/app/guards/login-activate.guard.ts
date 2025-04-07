import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';


export const loginActivateGuard: CanActivateFn = (route, state) => {
  const loginService: LoginServiceService = inject(LoginServiceService);
  const router: Router = inject(Router);
  return loginService.isLoggedIn ? true: router.navigate(['login']);
};

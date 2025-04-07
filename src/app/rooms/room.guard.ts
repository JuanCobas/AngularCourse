import { CanActivateChildFn } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';
import { inject } from '@angular/core';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {

  const loginService: LoginServiceService = inject(LoginServiceService);

  return loginService.isAdmin;
};

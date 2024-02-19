import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

const user = localStorage.getItem('userData')

  return user? true :
  inject(Router).createUrlTree(['/']);
  ;
};

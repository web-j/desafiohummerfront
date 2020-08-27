import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toast } from 'src/app/constant/constant-message';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  public durationInSeconds = 5;

  constructor(
    private router: Router,
    private authService: AuthService,

    public snack: MatSnackBar
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {

      if (route.data.roles && route.data.roles.indexOf(currentUser.user.accessRule) === -1) {
        this.router.navigate(['/']);
        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {

      if (route.data.roles && route.data.roles.indexOf(currentUser.user.accessRule) === -1) {
        this.toast(toast.block.message, toast.block.action);
        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }

  toast(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}

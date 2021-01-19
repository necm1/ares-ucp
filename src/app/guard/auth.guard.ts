import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root',
})
/**
 * @class AuthGuard
 */
export class AuthGuard implements CanActivate, CanActivateChild {
  /**
   * AuthGuard constructor
   *
   * @constructor
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.checkAuth();
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.checkAuth();
    return true;
  }

  /**
   * Check if user is logged in
   * if not, redirect user to auth page
   *
   * @private
   */
  private checkAuth(): void {
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl('auth');
    }
  }
}

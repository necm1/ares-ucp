import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'ares-root',
  templateUrl: './ares.component.html',
  styleUrls: ['./ares.component.scss'],
})
/**
 * @class AresComponent
 */
export class AresComponent {
  /**
   * AresComponent constructor
   *
   * @constructor
   * @param authService
   */
  constructor(private authService: AuthService) {}

  /**
   * Determinate if the user is authenticated
   *
   * @public
   * @returns boolean
   */
  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}

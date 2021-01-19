import { Injectable } from '@angular/core';
import { Notyf, NotyfNotification } from 'notyf';

@Injectable({
  providedIn: 'root',
})
/**
 * @class AlertService
 */
export class AlertService {
  /**
   * @private
   * @property
   */
  private notyf: Notyf;

  /**
   * AlertService constructor
   *
   * @constructor
   */
  constructor() {
    this.notyf = new Notyf({
      duration: 2500,
      ripple: true,
      dismissible: true,
      types: [
        {
          type: 'warning',
          background: 'orange',
        },
      ],
    });
  }

  /**
   * Create error alert
   *
   * @public
   * @param msg
   * @returns NotyfNotification
   */
  public error(msg: string): NotyfNotification {
    return this.notyf.error(msg);
  }

  /**
   * Create success alert
   *
   * @public
   * @param msg
   * @returns NotyfNotification
   */
  public success(msg: string): NotyfNotification {
    return this.notyf.success(msg);
  }

  /**
   * Dismiss all active alerts
   *
   * @public
   */
  public dismissAll(): void {
    this.notyf.dismissAll();
  }
}

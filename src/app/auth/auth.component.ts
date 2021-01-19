import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'ares-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
/**
 * @class AuthComponent
 */
export class AuthComponent implements OnInit, OnDestroy {
  /**
   * AuthComponent constructor
   *
   * @constructor
   * @param alertService
   */
  constructor(private alertService: AlertService) {}

  /**
   * Initialize AuthComponent
   *
   * @public
   */
  public ngOnInit(): void {
    this.alertService.error('penis?');

    document.querySelector('ares-root')?.classList.add('no--flex');
  }

  /**
   * Dispose AuthComponent
   *
   * @public
   */
  public ngOnDestroy(): void {
    document.querySelector('ares-root')?.classList.remove('no--flex');
  }
}

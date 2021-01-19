import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../service/alert.service';
import { AuthService } from './service/auth.service';

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
   * @public
   * @property
   */
  public authForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  /**
   * AuthComponent constructor
   *
   * @constructor
   * @param alertService
   * @param formBuilder
   * @param authService
   */
  constructor(private alertService: AlertService, private formBuilder: FormBuilder, private authService: AuthService) {}

  /**
   * Initialize AuthComponent
   *
   * @public
   */
  public ngOnInit(): void {
    document.querySelector('ares-root')?.classList.add('no--flex');
  }

  /**
   * Handle form submit
   * 
   * @public
   */
  public onSubmit(): void {
    const subscription: Subscription = this.authService.auth(this.f.username.value, this.f.password.value).subscribe({
      next: (e) => console.log(e),
      complete: () => subscription.unsubscribe()
    })
  }

  /**
   * Dispose AuthComponent
   *
   * @public
   */
  public ngOnDestroy(): void {
    document.querySelector('ares-root')?.classList.remove('no--flex');
  }

  /**
   * Get auth form controls
   * 
   * @return [key: string]: AbstractControl
   */
  get f() {
    return this.authForm.controls;
  }

}

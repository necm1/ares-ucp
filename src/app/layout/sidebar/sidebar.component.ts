import { Component, OnInit } from '@angular/core';
import {
  faBriefcase,
  faCar,
  faCog,
  faSignOutAlt,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ares-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
/**
 * @class SidebarComponent
 * @implements OnInit
 */
export class SidebarComponent implements OnInit {
  /**
   * @public
   * @property
   */
  public faUser: IconDefinition = faUser;

  /**
   * @public
   * @property
   */
  public faCar: IconDefinition = faCar;

  /**
   * @public
   * @property
   */
  public faBriefCase: IconDefinition = faBriefcase;

  /**
   * @public
   * @property
   */
  public faCog: IconDefinition = faCog;

  /**
   * @public
   * @property
   */
  public faSignOut: IconDefinition = faSignOutAlt;

  /**
   * SidebarComponent constructor
   *
   * @constructor
   */
  constructor() {}

  /**
   * Initialize SidebarComponent
   */
  ngOnInit(): void {}
}

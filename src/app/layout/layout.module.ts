import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TooltipModule.forRoot(),
    RouterModule,
  ],
  exports: [SidebarComponent],
})
export class LayoutModule {}

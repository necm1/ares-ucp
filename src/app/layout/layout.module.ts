import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LevelComponent } from './home/level/level.component';

@NgModule({
  declarations: [SidebarComponent, LevelComponent],
  imports: [CommonModule, TooltipModule.forRoot(), RouterModule],
  exports: [SidebarComponent, LevelComponent],
})
export class LayoutModule {}

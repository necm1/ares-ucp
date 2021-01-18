import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AresRoutingModule } from './ares-routing.module';
import { AresComponent } from './ares.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AresComponent],
  imports: [BrowserModule, AresRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AresComponent],
})
export class AresModule {}

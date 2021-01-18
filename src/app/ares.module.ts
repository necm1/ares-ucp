import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AresRoutingModule } from './ares-routing.module';
import { AresComponent } from './ares.component';

@NgModule({
  declarations: [AresComponent],
  imports: [BrowserModule, AresRoutingModule],
  providers: [],
  bootstrap: [AresComponent],
})
export class AresModule {}

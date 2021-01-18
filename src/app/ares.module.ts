import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AresRoutingModule } from './ares-routing.module';
import { AresComponent } from './ares.component';
import { LayoutModule } from './layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AresComponent],
  imports: [
    BrowserModule,
    AresRoutingModule,
    QuicklinkModule,
    LayoutModule,
    FontAwesomeModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AresComponent],
})
export class AresModule {}

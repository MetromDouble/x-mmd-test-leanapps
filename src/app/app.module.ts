import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

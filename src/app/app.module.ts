import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { DashboardService } from './dashboard.service';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { DashboardComponent } from './dashboard';
import { CardIncomeComponent } from './card-income/card-income.component';
import { CardActivityComponent } from './card-activity/card-activity.component';
import { CardViewsComponent } from './card-views/card-views.component';
import { CardTodayIncomeComponent } from './card-today-income/card-today-income.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    CardIncomeComponent,
    CardActivityComponent,
    CardViewsComponent,
    CardTodayIncomeComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  providers: [
    DashboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

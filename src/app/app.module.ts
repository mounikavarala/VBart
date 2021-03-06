import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { StationsPage } from '../pages/stations/stations';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AdvisoriesPage } from '../pages/advisories/advisories';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchStationsPage } from '../pages/search-stations/search-stations';
import { ToStationsPage } from '../pages/to-stations/to-stations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {StationsService} from "../pages/services/StationsService";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StationsPage,
    FavoritesPage,
    AdvisoriesPage,
    TabsPage,
    SearchStationsPage,
    ToStationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StationsPage,
    FavoritesPage,
    AdvisoriesPage,
    TabsPage,
    SearchStationsPage,
    ToStationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StationsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}

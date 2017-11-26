import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CulturalPage } from '../pages/cultural/cultural';
import { WorkshopPage } from '../pages/workshop/workshop';
import { TechnicalPage } from '../pages/technical/technical';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{SuperTabsModule } from "ionic2-super-tabs";

@NgModule({
  declarations: [
    MyApp,
    CulturalPage,
    WorkshopPage,
    TechnicalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CulturalPage,
    WorkshopPage,
    TechnicalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

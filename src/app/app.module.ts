import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DayPage } from '../pages/day/day';
import { HistoryPage } from '../pages/history/history';
import { OperationsPage } from '../pages/operations/operations';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from "@ionic/storage";
import { BalanceProvider } from '../providers/balance/balance-provider';
import { HistoryProvider } from '../providers/history/history-provider';

@NgModule({
  declarations: [
    MyApp,
    DayPage,
    HistoryPage,
    OperationsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DayPage,
    HistoryPage,
    OperationsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BalanceProvider,
    HistoryProvider
  ]
})
export class AppModule {}

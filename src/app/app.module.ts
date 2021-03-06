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
import { DayProvider } from '../providers/day/day-provider';
import {HistoryTableComponent} from "../components/history-table/history-table";

@NgModule({
  declarations: [
    MyApp,
    DayPage,
    HistoryPage,
    OperationsPage,
    TabsPage,
    HistoryTableComponent
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
    HistoryProvider,
    DayProvider
  ]
})
export class AppModule {}

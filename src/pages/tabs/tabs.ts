import { Component } from '@angular/core';

import { DayPage } from '../day/day';
import { HistoryPage } from '../history/history';
import { OperationsPage } from '../operations/operations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OperationsPage;
  tab2Root = DayPage;
  tab3Root = HistoryPage;

  constructor() {

  }
}

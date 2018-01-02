import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { OperationsPage } from '../operations/operations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OperationsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

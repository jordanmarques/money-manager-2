import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage {
  private balance: number;

  constructor(public navCtrl: NavController) {
    this.balance = 300;
  }

}

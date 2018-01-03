import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage {

  amount: number;
  comment: string;
  balance: number;

  constructor(private storage: Storage) {
    this.refreshBalance()
  }

  credit(amount: number) {
    if(!amount) return;

    amount = Number(amount);
    this.storage.set("balance",  this.balance + amount)
                .then(() => {
                  this.clear();
                  this.refreshBalance()
                })
  }

  debit(amount: number) {
    if(!amount) return;

    amount = Number(amount);
    this.storage.set("balance", this.balance - amount )
                .then( () => {
                  this.clear();
                  this.refreshBalance()
                });
  }

  refreshBalance() {
    this.storage.get("balance")
                .then(balance => { this.balance = balance ? balance : 0 });
  }

  clear() {
    this.amount = null;
    this.comment = null;
  }
}

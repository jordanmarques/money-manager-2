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

  credit(balance: number, amount: number) {
    this.updateBalance((balance, amount) => balance + amount, balance, amount)
  }

  debit(balance: number, amount: number) {
    this.updateBalance((balance, amount) => balance - amount, balance, amount)
  }

  refreshBalance() {
    this.storage.get("balance")
                .then(balance => { this.balance = balance ? balance : 0 });
  }

  private updateBalance(fn: Function, balance: number, amount: number) {
    if(!amount) return;

    const amountNumber = Number(amount);
    const total = fn(balance, amountNumber);

    this.storage.set("balance", total )
      .then( () => {
        this.clear();
        this.refreshBalance()
      });
  }

  private clear() {
    this.amount = null;
    this.comment = null;
  }
}

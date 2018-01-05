import {Component, OnInit} from '@angular/core';
import {BalanceProvider} from "../../providers/balance/balance-provider";
import {Operation} from "./operation";
import {HistoryProvider} from "../../providers/history/history-provider";

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage implements OnInit {

  operation: Operation;
  balance: number;

  constructor(private balanceProvider: BalanceProvider, private historyProvider: HistoryProvider) {}

  ngOnInit(): void {
    this.refreshBalance();
    this.operation = new Operation();
  }

  credit(balance: number, operation: Operation) {
    this.operationButtonClicked((balance, amount) => balance + amount, balance, operation);
  }

  debit(balance: number, operation: Operation) {
    this.operationButtonClicked((balance, amount) => balance - amount, balance, operation);
  }

  private refreshBalance() {
    this.balanceProvider.get().then(balance => { this.balance = balance ? balance : 0 });
  }

  private updateBalance(fn: Function, balance: number, operation: Operation) {
    if(!operation || !operation.amount) return;

    const amountNumber = Number(operation.amount);
    const total = fn(balance, amountNumber);

    this.balanceProvider.update(total)
      .then( () => {
        this.clear();
        this.refreshBalance()
      });
  }

  private saveOperation(operation: Operation) {
    this.historyProvider.add(operation)
  }

  private clear() {
    this.operation = new Operation(null, null);
    console.log(this.operation)
  }

  private operationButtonClicked(fn: (balance, amount) => any, balance: number, operation: Operation) {
    this.updateBalance(fn, balance, operation);
    this.saveOperation(operation);
  }
}

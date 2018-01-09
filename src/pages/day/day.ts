import {Component} from '@angular/core';
import {BalanceProvider} from "../../providers/balance/balance-provider";

@Component({
  selector: 'page-day',
  templateUrl: 'day.html'
})
export class DayPage{

  private dailySpend: number;

  constructor(public balanceProvider: BalanceProvider) {}

  ionViewWillEnter() {
    this.balanceProvider.get().then(balance => {
      const today = new Date();
      const actualMonth: number = today.getMonth();
      const actualDate: number = today.getDate();
      const remainingDays: number = this.lastDayOfMonth(actualMonth) - actualDate;

      this.dailySpend = Number(balance / remainingDays).toPrecision(3);
    })
  }

  private lastDayOfMonth(month: number): number {
  return new Date(new Date().getFullYear(), month, 0).getDate();
}
}

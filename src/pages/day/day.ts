import {Component} from '@angular/core';
import {BalanceProvider} from "../../providers/balance/balance-provider";
import {DayProvider} from "../../providers/day/day-provider";
import {HistoryProvider} from "../../providers/history/history-provider";
import {Operation} from "../operations/operation";

@Component({
  selector: 'page-day',
  templateUrl: 'day.html'
})
export class DayPage {

  private dailySpend: number;
  private dailyRemain: number;
  private daysLeft: number;
  private spendToday: number;
  private operations: Operation[];

  constructor(public balanceProvider: BalanceProvider, public dayProvider: DayProvider, public historyProvider: HistoryProvider) {
  }

  ionViewWillEnter() {
    this.computeDailySpendAndRemain();
    this.computeTodayHistory();
  }

  private lastDayOfMonth(month: number): number {
    return new Date(new Date().getFullYear(), month, 0).getDate();
  }

  private computeDailySpendAndRemain(){
    this.balanceProvider.get().then(balance => {
      const today = new Date();
      const actualMonth: number = today.getMonth();
      const actualDate: number = today.getDate();
      const remainingDays: number = this.lastDayOfMonth(actualMonth) - actualDate;

      this.daysLeft = remainingDays;

      if(remainingDays != 0){
        this.dailySpend = Number(Number(balance / remainingDays).toPrecision(3));
      } else {
        this.dailySpend = Number(balance)
      }


      this.dayProvider.byDate(new Date()).then(amount => {

        if (!amount) {
          amount = this.dailySpend;
          this.dayProvider.save(new Date(), amount);
        }

        this.dailyRemain = amount;
      })
    })
  }

  private computeTodayHistory() {
    this.historyProvider.all().then( operations => {

      this.operations = operations
        .filter( operation => this.isToday(operation.date))
        .filter( operation => operation.amount < 0);

      this.spendToday = this.operations
        .map(operation => operation.amount)
        .reduce( (amount1, amount2) => Number(amount1) + Number(amount2), 0);

      this.spendToday = Math.abs(this.spendToday)
    })
  }

  private isToday(date: Date): boolean {
    date = new Date(date);
    var today: Date = new Date();
    return date.getDate() == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear();
  }
}

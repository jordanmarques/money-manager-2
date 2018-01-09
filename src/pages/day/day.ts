import {Component} from '@angular/core';
import {BalanceProvider} from "../../providers/balance/balance-provider";
import {DayProvider} from "../../providers/day/day-provider";

@Component({
  selector: 'page-day',
  templateUrl: 'day.html'
})
export class DayPage{

  private dailySpend: number;
  private dailyRemain: number;

  constructor(public balanceProvider: BalanceProvider, public dayProvider: DayProvider) {}

  ionViewWillEnter() {
    this.balanceProvider.get().then(balance => {
      const today = new Date();
      const actualMonth: number = today.getMonth();
      const actualDate: number = today.getDate();
      const remainingDays: number = this.lastDayOfMonth(actualMonth) - actualDate;

      this.dailyRemain = Number(Number(balance / remainingDays).toPrecision(3));

      this.dayProvider.save(new Date(), this.dailySpend);

      this.dayProvider.byDate(new Date()).then(amount => {
        console.log(amount);

        if(!amount)
          this.dayProvider.save(new Date(), this.dailySpend);

        this.dailySpend = Number(amount);
      })

    })
  }

  private lastDayOfMonth(month: number): number {
  return new Date(new Date().getFullYear(), month, 0).getDate();
}
}

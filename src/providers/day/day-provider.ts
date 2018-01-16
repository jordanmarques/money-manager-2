import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DayProvider {

  private readonly KEY: string = "day";

  constructor(private storage: Storage) {
  }

  all(): Promise<any> {
    return this.storage.get(this.KEY);
  }

  save(date: Date, value: number){
    const cleanDate = this.toStringDate(date);

    this.all().then(days => {

      if(!days)
        days = new Map();

      days[cleanDate] = value;

      this.storage.set(this.KEY, days)
    })
  }

  byDate(date: Date) : Promise<any> {
    const cleanDate = this.toStringDate(date);

    return this.all().then(days => {
      return new Promise((resolve, reject) => {
        if(!days)
          resolve(null);

        resolve(days[cleanDate]);
      })
    })
  }

  private toStringDate(date: Date): string{
    const stringDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    return stringDate;
  }

}
